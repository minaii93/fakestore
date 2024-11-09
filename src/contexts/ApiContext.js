import { createContext, useState, useEffect} from "react";
import axios from "axios";
export const ApiContext = createContext("");

export const ApiProvider = ({children}) => {
    // a program állapotát a terméklista írja le, ami aszonkron módon a végponton töltünk fel adattal
    //a terméklista lesz a state

    const [termekLista, setTermekLista] = useState([]);

    //aszinkron hívás axiosszal 
    function getAdat(vegpont){
        axios
        .get(vegpont)
        .then(function (response) {
    // handle success
        console.log(response.data); //tényleges listát ad vissza
        setTermekLista(response.data)
         })
        .catch(function (error) {
    // handle error
        console.log(error);
        })
        .finally(function () {
    // always executed
        });
         }
    

         function postAdat(vegpont, adat){
            axios
            .post(vegpont, adat)
            .then(function (response) {
        // handle success
            console.log(response); //tényleges listát ad vissza
            
             })
            .catch(function (error) {
        // handle error
            console.log(error);
            })
            .finally(function () {
        // always executed
            });
             }
    useEffect(()=>{
        getAdat("https://fakestoreapi.com/products");
        // a hívás csak egyszer történjen meg ill csak akkor hívódjon újra ha valami változás történik a listában vagy a kérésben
    }, []);
    


    return(<ApiContext.Provider value={{termekLista, postAdat}}>
        {children}
    </ApiContext.Provider>

    )
}

