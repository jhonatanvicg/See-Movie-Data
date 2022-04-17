const Error = () => {
    return(
        <div className="ContainerError">
            <div className="Error__ImageFilter">      
            </div>
            <div className="Error__Image">
            <img src="/images/NotFound.jpg" alt="" />
            </div>
            <div className="Error__Info">
            <p>404</p>
            <p>Page not Found</p>
            </div>
        </div>
        )
}
 
export default Error;