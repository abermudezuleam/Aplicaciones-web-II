const registro=[
    {
        id:1,
        asignatura:"Aplicaciones web II",
        idasignatura:1
    },
    {
        id:2,
        asignatura: "Mineria de datos",
        idasignatura:1
    },
    {
        id:3,
        asignatura: "Modelamiento y simulacion",
        idasignatura:2
    },
]
const estudiante=[
    {
        id:1,
        name:"Luis Morales",
    },
    {
        id:2,
        name:"Anthony Carranza",
    },
    {
        id:3,
        name:"Alexander SolOrzano",
    }
]


for (const iterator of registro) {
    authorAux= estudiante.find(ele=> ele.id===iterator.idasignatura)
    console.log(`Book ${iterator.tittle}  Author: ${authorAux.name} `);
    // console.log(authorAux.name);
}