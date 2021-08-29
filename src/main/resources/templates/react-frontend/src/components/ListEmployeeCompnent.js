import axios from 'axios';
import React, {useState,useEffect} from 'react';

function ListEmployeeCompnent()  {
    const [data, setData] = useState([] );
 
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost:8080/api/v1/employees',
          );
          setData(result.data);

        };
     
        fetchData();
      }, []);

   /*  constructor(props){
        super(props)
        this.state={
           employees:[] 
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/v1/employees`)
          .then(res => {
            const employees = res.data;
            this.setState({ employees});
            console.log(employees)

          })
      } 
    render() { */
        
        
        return (

            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <table className="table table stripped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee EmailId</th>
                            <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                    
      {data.map(item => (
        <tr key={item.id}>
           <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.emailId}</td>
        </tr>
      ))}

                    {/* { this.state.employees.map(emp => 
                    <tr key={emp.id}>
                        <td>{emp.firstname}</td>
                        <td>{emp.lastname}</td>
                        <td>{emp.emailId}</td>

                    </tr>)}              */}

                    </tbody>
                    </table> 
                </div>
            </div>
        );
    }


export default ListEmployeeCompnent;