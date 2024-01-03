import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Context } from '../index';
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const { images } = useContext(Context);
    const pageCount = Math.ceil(images.totalCount / images.limit)
    const pages = []
    for(let i=0; i<pageCount;i++){
        pages.push(i+1)
    }
    return ( 
        <>
        <nav aria-label="Page navigation example" >
            <ul class="pagination" style={{justifyContent:'center'}}>
                <li class="page-item">
                    </li>
                        {pages.map(page=>{
                            return <Pagination.Item 
                                key={page}
                                active={images.page === page}
                                onClick={()=>images.setPage(page)}
                            >
                                {page}</Pagination.Item>
                        })}
                    <li class="page-item">
                </li>
            </ul>
        </nav>
        </>
     );
})
 
export default Pages;