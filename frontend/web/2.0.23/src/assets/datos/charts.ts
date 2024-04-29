import { ClassChartsVentas } from "./Class";
import { ClassChartsIngresos } from "./Class";
import { ClassChartsClientes } from "./Class";
import { ClassChartsVentasRecientes } from "./Class";
import { ClassChartsMServiciosVendidos } from "./Class";
import { ClassChartsActividadReciente } from "./Class";


export const chartsVentas: ClassChartsVentas[] = [

            {
                id: 1,
                ventas: 7500, 
                porcentaje: 15, 

                }, 
                
];

export const chartsIngresos: ClassChartsIngresos[] = [

    {
        id: 1,
        ingresos: 114620, 
        porcentaje: 9, 

        }, 
        
];

export const chartsClientes: ClassChartsClientes[] = [

    {
        id: 1,
        clientes: 150, 
        porcentaje: 9, 

        }, 
        
];

export const chartsVentasRecientes: ClassChartsVentasRecientes[] = [

    {
        id: 1,
        nombreCliente: "Juan perez", 
        servicio: "Plomero",
        precio: 150,
        estado: "Pendiente",
        class: "badge bg-warning"

        }, 
    {
        id: 2,
        nombreCliente: "pedro Sanchez", 
        servicio: "Pintor",
        precio: 1500,
        estado: "Aprobado",
        class: "badge bg-success"
    
        }, 
    {
        id: 3,
        nombreCliente: "Laura Lopez", 
        servicio: "Pintor",
        precio: 6800,
        estado: "Pendiente",
        class: "badge bg-warning"

        }, 
    {
        id: 4,
        nombreCliente: "Carloz Martinez", 
        servicio: "Electricista",
        precio: 4500,
        estado: "Aprobado",
        class: "badge bg-success"
    
        }, 
        
];

export const chartsMServiciosVendidos: ClassChartsMServiciosVendidos[] = [

    {
        id: 1,
        imagen: "assets/images/servicios/servicio_de_pintura_de_cass_3.jpg", 
        servicio: "Plomero",
        
        ventas: 23,
        ingresos: 3500

        }, 
    {
        id: 2,
        imagen: "assets/images/servicios/servicio_de_pintura_de_casas_3.jpg", 
        servicio: "Pintor",
        
        ventas: 15,
        ingresos: 4500
    
        }, 
    {
        id: 3,
        imagen: "assets/images/servicios/servicio_de_pintura_de_casas_3.jpg", 
        servicio: "Pintor",
        
        ventas: 25,
        ingresos: 5400

        }, 
    {
        id: 4,
        imagen: "assets/images/servicios/servicio_de_electricista_3.jpg", 
        servicio: "Electricista",
        
        ventas: 11,
        ingresos: 3400
    
        }, 
        
];

export const chartsActividadReciente: ClassChartsActividadReciente[] = [

    {
        id: 1,
        tiempo: "1 día",
        actividad: "10 nuevos usuarios"
    },
    {
        id: 1,
        tiempo: "2 días",
        actividad: "5 nuevos usuarios"
    },
    {
        id: 1,
        tiempo: "3 días",
        actividad: "6 nuevos usuarios"
    },
    {
        id: 1,
        tiempo: "1 semana",
        actividad: "65 servicios vendidos"
    },
    {
        id: 1,
        tiempo: "1 semana",
        actividad: "5 reclamos de clientes"
    },



]
