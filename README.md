# 1 . crear directorio de prisma 
# 2 . configurar el schema.prisma

Trabajar con rutas:
1. server
    - routers (Conexion hecha correctamente)
      - _app.ts (conectado al enrutador global)
      - questionRouter.ts 
    - trpc (enrutador global)
    - context (intermediario de trpc y prisma , desconstruccion de objetos)
2. utils
  - prisma.ts (conexión con prisma )
  - trpc.ts (configuracióm general para el  uso de tprc) (conexion de las rutas con api/trpc)
3. api
  - trpc 
    - [trpc.ts] (intermediario de utils y rutas , reconocimiento de rutas)  


  # server/trpc.ts:
  Primero, inicialicemos el backend de tRPC. Es una buena convención hacer esto en un archivo separado y exportar funciones auxiliares
  # server/routes/_app.ts:
  inicializaremos nuestra instancia de enrutador principal, comúnmente conocida como appRouter, a la que luego agregaremos procedimientos. Por último, necesitamos exportar el tipo de enrutador que luego usaremos en el lado del cliente.

  # CONEXION DE ENRUTADOR DE FRONT-END Y BACK-END:
  export type AppRouter = typeof appRouter;

@trpc/server : Para crear el servidor tRPC
@trpc/client : Crear el cliente tRPC
@trpc/react-query : Conecta el servidor tRPC a React
@trpc/next – Conecta el enrutador tRPC a Next.js
@tanstack/react-query : A server state management library for React
@tanstack/react-query-devtools :  A GUI for React Query
superjson : Nos permite serializar fácilmente expresiones JavaScript en un superconjunto de JSON.


