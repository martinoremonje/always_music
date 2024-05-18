# AlwaysMusic

AlwaysMusic es una aplicación de gestión de estudiantes para una escuela de música. La aplicación permite registrar, ver, editar y eliminar estudiantes utilizando una base de datos PostgreSQL.

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/martinoremonje/always_music.git

2. Navega al directorio del proyecto:
    ```bash
    cd always_music

3. Instala las dependencias:
    ```bash
    npm install


## Uso
Puedes interactuar con la aplicación mediante la línea de comandos utilizando los siguientes comandos:

Agregar un estudiante:

    node index.js agregar "Nombre Estudiante" "RUT" "Curso" Nivel

Consultar un estudiante por RUT:
    
    node index.js consultar "RUT"

Consultar todos los estudiantes:
    
    node index.js consultar_todos

Actualizar un estudiante:
    
    node index.js actualizar "Nombre Estudiante" "RUT" "Nuevo Curso" NuevoNivel

Eliminar un estudiante:
    
    node index.js eliminar "RUT"


## Autor
Martin Orellana

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.