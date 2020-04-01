import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import '../i18n'

const TodoList = lazy(() => import('../pages/TodoList'))
const FilmsList = lazy(() => import('../pages/FilmsList'))

const TODO_LIST = '/todo_list'
const FILMS_LIST = '/films_list'

export default function Routes() {
  return (
    <Suspense fallback="loading">
      <Switch>
        <Route component={TodoList} exact path={TODO_LIST} />
        <Route component={FilmsList} path={FILMS_LIST} />
        <Redirect from="/" to={TODO_LIST} />
      </Switch>
    </Suspense>
  )
}
