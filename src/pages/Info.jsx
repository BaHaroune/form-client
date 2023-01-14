import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

export const Info = () => {
  const [data, setData] = useState([]);

  const retreiveDate = async () => {
    const response = await Axios.get('http://localhost:3001/getPersonne');
    setData(response.data);  
  }

  useEffect(() => {
    retreiveDate();
  }, [])

  const deleteUser = (nom) => {
    Axios.delete(`http://localhost:3001/personne/${nom}`);
    window.location.reload();
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    prenom
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    nom
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    sexe
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    date naissance
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    profession
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    telephone
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    mail
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Suppression
                  </td>
                </tr>

              </thead>
              <tbody>
                {
                  data ? data.map((item, index) => { 
                    return (
                      <tr key={item.nom}>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {index + 1}
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {item.prenom}
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {item.nom}
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {item.sexe}
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {item.jour}/{item.mois}/{item.annee}
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {item.profession}
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {item.telephone}
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {item.email}
                        </th>
                        <th scope="col" className="text-sm font-medium  px-6 py-4 text-left">
                          <span onClick={() => deleteUser(item.nom)} className='text-white bg-red-500 rounded-md p-3 cursor-pointer'>Supprimer</span>
                        </th>
                      </tr>
                    )
                  }) : null
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
