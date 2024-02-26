import axios from "axios";
const EMPLOYEE_BASE_REST_API_URL='http://localhost:8080/api/v1/employees';
const employeeServiceHooks = (url) => {

  const getEmployees=async()=>{
    return await axios.get(EMPLOYEE_BASE_REST_API_URL)
  }
  const createEmployee=async(employee)=>{
    return await axios.post(EMPLOYEE_BASE_REST_API_URL,employee)
  }
  const getEmployeeById=async(employeeId)=>{
        return await axios.get(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId);
    }
  const updateEmployee=async(employeeId,employee)=>{
        return await axios.put(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId,employee);
    }
  const deleteEmployee=(employeeId)=>{
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId);
    }

  return {getEmployees,createEmployee,getEmployeeById,updateEmployee,deleteEmployee}

}


export default employeeServiceHooks