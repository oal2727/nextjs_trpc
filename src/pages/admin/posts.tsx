import React from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { trpc } from "../../utils/trpc"; // paso 1 importar el trpc


const Posts=()=>{
  const {data:listPosts} = trpc.question.get.useQuery(undefined, {
		refetchOnWindowFocus: false,
	});
  console.log(listPosts)

  return(
    <div className="w-3/4 m-auto">
      <form className="w-[400px] m-auto p-2">
     <Input name="title"/>
     <Input name="content"/>
    <Button>
      Agregar
    </Button>
     </form>
    <p>{JSON.stringify(listPosts)}</p>
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">Title</th>
              <th scope="col" className="px-6 py-4">Content</th>
            </tr>
          </thead>
          <tbody>
            {
              listPosts && listPosts?.map((post,index)=>(
                <tr key={index}>
                  <td className="px-6 py-4">{index+1}</td>
                  <td className="px-6 py-4">{post.title}</td>
                  <td className="px-6 py-4">{post.content}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
  )
}
export default Posts;