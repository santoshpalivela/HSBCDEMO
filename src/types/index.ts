
 export interface Post {
    userId: number;
    id: number;
    title:string ,
    body:string 
}

export interface Posts
{
    items:Post[]
}

export interface LoginEntity {
  login: string;
  password: string;
}

export interface ErrorInfo 
{
  message:string,
  isValid:boolean
}

// export {Post,Posts,LoginEntity};