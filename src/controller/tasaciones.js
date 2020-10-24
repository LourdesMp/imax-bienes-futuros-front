
// peticion get de los proyectos a la database
export const getTasaciones = () =>
  fetch('http://localhost:8000/api/v1/tasaciones/listTasaciones', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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
