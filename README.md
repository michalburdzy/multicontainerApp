# All defined services (containers):

## client
get all notes GET `/api/notes`
add note  POST `/api/notes` {note: 'note'}

## postgres

host db

## redis

host cache

## api getter

get all notes from PostgeSQL

## api seter

add new note to REDIS cache

## api worker

detect new note added to REDIS cache and save it to PostgreSQL

## nginx

route all request
