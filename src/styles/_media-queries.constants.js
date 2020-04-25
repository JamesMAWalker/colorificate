export default {
  up() {

  },
  down(size) {
    const sizes = {
      xs: '576px',
      sm: '767px',
      md: '992px',
      lg: '1200px',
    }
    return `@media (max-width: ${sizes[size]})`;
  }
}