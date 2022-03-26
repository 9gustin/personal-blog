export const validatePage = page => page.visible && new Date(page.release_date) <= new Date()
