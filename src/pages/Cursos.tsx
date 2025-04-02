// import React, { createContext, useState, useContext, ReactNode } from 'react';
// import {Curso} from '../declarations/types'

// interface CursosContextType {
//   cursos: Curso[]
//   setCursos: React.Dispatch<React.SetStateAction<Curso[]>>
// }
// const CursosContext = createContext<CursosContextType | undefined>(undefined);
// interface CursosProviderProps {
//   children: ReactNode;
// }
// export const CursosProvider:React.FC<CursosProviderProps> = ({children})=>{
    
//   return (
//     <CursosContext.Provider value={{ cursos, setCursos}}> 
//     { children }
//     </CursosContext.Provider>
//   )
// }
// export const useCursos = (): Curso[] => {
//   const context = useContext(CursosContext);
//   if (!context) {
//     throw new Error("useCursos debe usarse dentro de un CursosProvider");
//   }
//   return context.cursos;
// };