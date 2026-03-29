
const token_t = 
{
  Part: 0, 
  Chapter: 1, 
  Section: 2, 
  Subsection: 3, 
  Item: 4, 
  p: 5, 
  subp: 6, 
  item: 7, 
  of: 8, 
  new: 9 
} as const 

type token_t = (typeof token_t)[keyof typeof token_t] ; 

export default token_t ; 