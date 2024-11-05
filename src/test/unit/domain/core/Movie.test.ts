import MovieBuider from "@/test/data"

test('deve criar filme', ()=>{
  const filme = MovieBuider.create().agora()
  console.log('===>', filme.props, filme.quantityViews)
  expect(filme.name.value).toBe("Avatar")

})

test('deve add mais uma view', ()=>{
  const filme = MovieBuider.create().agora()
 

  expect(filme.quantityViews).toBe(3)
})


