import React, { createContext, useState, useEffect } from 'react';
import { firestore } from '../config/firebase';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Use um ouvinte em tempo real para atualizar as tarefas automaticamente
    const unsubscribe = firestore.collection('tasks').onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(newTasks);
    });

    return () => unsubscribe(); // Limpar o ouvinte quando o componente for desmontado
  }, []);

  const criarTask = async ({ titulo, descricao, uid }) => {
    try {
      // Adicione uma nova tarefa ao Firestore
      await firestore.collection('tasks').add({
        titulo,
        descricao,
        state: 'todo',
        uid,
      });
    } catch (error) {
      console.error('Erro ao criar tarefa:', error.message);
    }
  };

  const updateTaskState = async (id) => {
    const taskRef = firestore.collection('tasks').doc(id);

    try {
      const task = await taskRef.get();
      if (task.exists) {
        // Atualize o estado da tarefa no Firestore
        await taskRef.update({
          state: task.data().state === 'todo' ? 'done' : 'todo',
        });
      }
    } catch (error) {
      console.error('Erro ao atualizar estado da tarefa:', error.message);
    }
  };

  const updateTask = async (taskId, uid, updatedData) => {
    const taskRef = firestore.collection('tasks').doc(taskId);

    try {
      const task = await taskRef.get();
      if (task.exists && task.data().uid === uid) {
        // Atualize os dados da tarefa no Firestore
        await taskRef.update(updatedData);
      }
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error.message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      // Exclua a tarefa do Firestore
      await firestore.collection('tasks').doc(taskId).delete();
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error.message);
    }
  };

  const tasksValues = {
    tasks,
    criarTask,
    updateTask,
    deleteTask,
    updateTaskState,
  };

  return (
    <TaskContext.Provider value={tasksValues}>{children}</TaskContext.Provider>
  );
};
