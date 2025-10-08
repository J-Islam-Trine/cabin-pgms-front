import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rooms/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/rooms/add"!</div>
}
