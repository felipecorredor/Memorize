import React,{ useState, useEffect, useMemo, useCallback } from 'react'
import { List } from './List'

const initialUsers = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Maria' }
]
function App() {

  const [users, setUsers] = useState(initialUsers)
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    const newUSer = { id: Date.now(), name: text}
    setUsers([...users, newUSer])
  }

  const handleDelete = useCallback((userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }, [users])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(text)
  }

  const handeUsers = () => {
    setUsers(users)
    setText('')
    setSearch('')
  }

  const filteredUsers = useMemo(() =>
    users.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    }
  ), [search, users])

  const printUsers = useCallback(() => {
    console.log("CHANGED USERS", users)
  }, [users])

  useEffect(() => {
    printUsers()
  }, [users, printUsers])

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input defaultValue={text || ''}
              onChange={(e) => setText(e.target.value)}
              className="form-control me-2" placeholder="Search" />
            <button className="btn btn-outline-success me-2" onClick={handleSearch}>Search</button>
            <button className="btn btn-outline-primary" onClick={handleAdd}>Add</button>
          </form>
        </div>
      </nav>

      {filteredUsers.length === 0 &&
        <>
          <div class="alert alert-primary" role="alert">
            No user found!
          </div>
          {users.length !== 0 &&
            <button className="btn btn-info" onClick={handeUsers}>Show users</button>
          }
        </>
      }

      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
