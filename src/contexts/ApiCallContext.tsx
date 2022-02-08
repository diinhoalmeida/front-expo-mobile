import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Alert } from 'react-native';
import IUser from '../interfaces/user.interface';
import api from '../services/api';

type Props = {
    children: ReactNode;
}

interface ICalls {
    userSelectedById: any,
    getById: Function,
    deleteById: Function,
    updateById: Function,
    createUser: Function,
    getAllUsers: Function
}

export const CallsContext = createContext({} as ICalls);

export default function UtilsCallsProvider(props: Props) {
    const { children } = props;

    //GET BY ID
    const [userSelectedById, setUserSelectedById] = useState();
    const getById = (id: number, teste: Function) => {
      api
        .get("/users/" + id)
        .then((response) => setUserSelectedById(response.data))
        .then(() => teste(true))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
      });  
    }

    //DELETE BY ID
    const deleteById = (id: number, refreshTheList: Function) => {
      api
        .delete("/users/" + id)
        .then((response) => {
          Alert.alert('Deletado', response.data.message) 
        })
        .then(() => refreshTheList())
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err)
      });  
    }

    //UPDATE BY ID
    const updateById = (id: number, theUser: any, refreshTheList: Function) => {
      api.
        put("/users/" + id, theUser)
        .then((response) => {
          Alert.alert('Atualizado', response.data.message); 
        })
        .then(() => refreshTheList())
        .catch((err) => {
          console.error('ops, erro' + err)
        })    
    }

    //CREATE A USER
    const createUser = (objectToPost: IUser, setObjectToPost: Function, navigation: any) => {
      api
        .post("/users/", objectToPost)
        .then((response) => Alert.alert('Criado', response.data.message))
        .then(() => {
          setObjectToPost({
            nome: '',
            email: '',
            idade: null,
            telefone: ''    
          });
          navigation.navigate('ListaUsuarios')
        })
        .catch((err) => {
          console.error('ops, erro' + err)
        }) 
    }

    //GET ALL DATA
    const getAllUsers = (setListUsers: Function) => {
      api
      .get("/users")
      .then((response) => {
        if (response.data.length === 0) {
          setListUsers([]);
          Alert.alert('Atenção', 'A lista está vazia.'); 
        }
  
        setListUsers(response.data);
      })
      .catch((err) => {
        Alert.alert('Alerta', 'Não foi possível realizar solicitação.');
      });
    }

    return (
        <CallsContext.Provider
          value={{
            userSelectedById,
            getById,
            deleteById,
            updateById,
            createUser,
            getAllUsers
          }}
        >
          {children}
        </CallsContext.Provider>
    )

}

export function useGetById() {
  const context = useContext(CallsContext);
  const { userSelectedById, getById } = context;
  return { userSelectedById, getById };
}

export function useDeleteById() {
  const context = useContext(CallsContext);
  const { deleteById } = context;
  return { deleteById };
}

export function useUpdateById() {
  const context = useContext(CallsContext);
  const { getById, updateById } = context;
  return { getById, updateById };
}

export function useCreateUser() {
  const context = useContext(CallsContext);
  const { createUser } = context;
  return { createUser };
}

export function useGetAllData() {
  const context = useContext(CallsContext);
  const { getAllUsers } = context;
  return { getAllUsers };
}