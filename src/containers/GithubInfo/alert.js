import Swal from 'sweetalert2';
export const error = Swal.mixin({
  icon: 'error',
  title: 'User not found',
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1500,
});

export const success = Swal.mixin({
  icon: 'success',
  title: 'Fetch success',
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1500,
});