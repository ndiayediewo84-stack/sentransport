import User from './User'
function Tableau ({titre}){
    const utilisateurs =[
        {id : 1, nom : "NDIAYE", prenom : "Diewo"},
        {id : 2 ,nom : "DIOUF", prenom : "Ramatoulaye"}
        
    ]

    return(
        <div>
            <h1>Tableau {titre}</h1>
            {
                //'.map permet de parcourir des éléments
        
                utilisateurs.map(({id, nom, prenom}, index) =>(<User key={id} id={id} nom={nom} prenom={prenom} />))
            }


        </div>
    )
} 
export default Tableau;