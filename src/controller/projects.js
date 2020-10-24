
// peticion get de los proyectos a la database
export const getProjects = () =>
  fetch('http://localhost:8000/api/v1/proyectos/list', {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json'
    //   Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 401) {
      return new Error('No hay cabecera de autenticación');
    } if (resp.status === 403) {
      return new Error('No tiene permiso');
    }
  });

  export const postProduct = (product) => fetch('http://localhost:8000/api/v1/proyectos/list', {
  method: 'POST',
  body: JSON.stringify(product),
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 400) {
    return new Error('Faltan el nombre del proyecto');
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('No tiene permiso para realizar esta acción');
  } if (resp.status === 404) {
    return new Error('No existe un producto con ese Id');
  }
});

export const deleteProduct = (id) => fetch(`http://localhost:8000/api/v1/proyectos/list/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('No tiene permiso para realizar la acción');
  } if (resp.status === 404) {
    return new Error('Proyecto no encontrado');
  }
});

export const putProduct = (product, id) => fetch(`http://localhost:8000/api/v1/proyectos/list/${id}`, {
  method: 'PUT',
  body: JSON.stringify(product),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 400) {
    return new Error('No hay ningún campo a modificar');
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('No tiene permiso para realizar la acción');
  } if (resp.status === 404) {
    return new Error('Producto no encontrado');
  }
});
