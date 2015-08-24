<h1>SGB-screen-detail</h1>

<h3>Propósito</h3>

Esta pantalla es una vista que permite visualizar un ítem en detalle o cierta información.  Generalmente se llega a esta pantalla seleccionando el elemento a mostrar de una lista.   Se muestran en detalle todos los campos del ítem.

<h3>Datos</h3>

Para el template @contact se espera un item que tenga los siguientes atributos opcionales

- **title**: título del ítem
- **image**: enlace a una imágen correspondiente al ítem
- **detail\_1**: subtitulo con información del ítem
- **detail\_2**: subtitulo con información del ítem
- **date**: fecha de interés 
- **desc**: descripcion extensa del ítem
- **url**: enlace a más información o detalles
- **resources**: lista de recursos asociados al ítem

Para los template @terms y @news se esperan los siguientes campos 

- **screenTitle** : Título de la pantalla.
- **screenSubtitle** : Subtítulo de la pantalla.

Para el template @terms, se espera una lista adicional bajo el nombre de items donde el unico campo de cada ítem sea *desc*, o en vez de la lista, se puede simplemente especificar un campo message para que solo se muestre un mensaje. <br/>
Para el template @news, se espera una lista adicional bajo el nombre de *items* donde cada ítem tiene dos campos: 

- **desc**: descripcion del ítem
- **image**: imágen del ítem

<h3>Parámetros de la pantalla</h3>

- **templateType**: Funcion o string que indica que template se va a utilizar.

<h3>Diseño</h3>

<h4> Opcion @contact </h4>

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-detail.png)
