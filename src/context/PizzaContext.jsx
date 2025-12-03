import React, { createContext, useContext, useState, useEffect } from 'react';

const PizzaContext = createContext();

const BASE_API_URL = 'http://localhost:5000/api/pizzas';

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllPizzas = async () => {
        try {
            const response = await fetch(BASE_API_URL);
            
            if (!response.ok) {
                throw new Error(`Error al cargar las pizzas: ${response.status}`);
            }
            
            const data = await response.json();
            setPizzas(data);
        } catch (err) {
            console.error("Error fetching all pizzas:", err);
            setError("No se pudo cargar el menú de pizzas.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllPizzas();
    }, []);

    const contextValue = {
        pizzas,
        loading,
        error
    };

    return (
        <PizzaContext.Provider value={contextValue}>
            {children}
        </PizzaContext.Provider>
    );
};
export const usePizzas = () => {
    const context = useContext(PizzaContext);
    if (!context) {
        throw new Error('usePizzas debe ser usado dentro de un PizzaProvider');
    }
    return context;
};