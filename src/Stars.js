

function Stars({rating}){
    return (
        <>
            {
                [1,2,3,4,5].map((star, i)=>{
                    if(i < rating)return <span key={i}>filled</span>
                    else return <span key={i}>empty</span>
                })
            }
        </>
    )
}

export default Stars;