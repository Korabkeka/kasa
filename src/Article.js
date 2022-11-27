

function Article({category, content}){

    return (
        <article>
            <div>{category}</div>
            <div>
                {
                    Array.isArray(content)? (
                        content.map((el, i)=>{
                            return <div key={i}>{el}</div>
                        })
                    ) : (<p>{content}</p>)
                }
            </div>
        </article>
    )
}

export default Article;