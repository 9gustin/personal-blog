import React from 'react'

const initialState = null

const DataContext = React.createContext(initialState)
DataContext.displayName = 'DataContext'

export default DataContext