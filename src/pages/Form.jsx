import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';

function Form() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [jour, setJour] = useState('');
    const [mois, setMois] = useState('');
    const [annee, setAnnee] = useState('');
    const [sexe, setSexe] = useState('');
    const [profession, setProfession] = useState('');
    const [tel, setTel] = useState('');
    const [err, setErr] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    async function insertData() {
        if (tel === '1') {
            navigate('info');
            return
        }
        try {
            const response = await Axios.post('http://localhost:3001/personne', {
                nom: nom,
                prenom: prenom,
                jour: jour,
                mois: mois,
                annee: annee,
                sexe: sexe,
                profession: profession,
                telephone: tel,
            });
            if (response.data) {
                setMsg('les données ont été insérées avec succès.');
                setErr('');
            }
        } catch (error) {
            console.error(error);
            setErr("veillez remplir tout les champs !");
            setMsg('');
        }

        setNom(''); setPrenom(''); setAnnee(''); setJour(''); setMois(''); setSexe(''); setTel(''); setProfession('');
        setTimeout(() => {
            setMsg('');
            setErr('');
        }, 1000)
    }

    function generateOptions(nmbreInit, nbreMax) {
        const options = [];
        for (let i = nmbreInit; i <= nbreMax; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    }

    function generateOptionsAn(nmbreInit, nbreMax) {
        const options = [];
        for (let i = nmbreInit; i >= nbreMax; i--) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    }



    return (
        <div className='flex justify-center items-center py-10'>
            <div className="bg-[#8f4141] w-[400px] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="nom">
                        Nom:
                    </label>
                    <input
                        value={nom}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-bl leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="nom"
                        onChange={(e) => setNom(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="prenom">
                        Prénom:
                    </label>
                    <input
                        value={prenom}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-bl leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="prenom"
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="naissance">
                        Date de naissance:
                    </label>
                    <div className="flex items-center">
                        <select
                            value={jour}
                            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mr-2"
                            name="jour"
                            onChange={(e) => setJour(e.target.value)}
                        >
                            <option value=''></option>
                            {
                                generateOptions(1, 31)
                            }
                        </select>
                        <select
                            value={mois}
                            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mr-2"
                            name="mois"
                            onChange={(e) => setMois(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="1">Janvier</option>
                            <option value="2">Février</option>
                            <option value="2">Mars</option>
                            <option value="2">Avril</option>
                            <option value="2">Main</option>
                            <option value="2">Juin</option>
                            <option value="2">Juillet</option>
                            <option value="2">Aout</option>
                            <option value="2">Septembre</option>
                            <option value="2">Octobre</option>
                            <option value="2">Novembre</option>
                            <option value="2">Decembre</option>
                        </select>
                        <select
                            value={annee}
                            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            name="annee"
                            onChange={(e) => setAnnee(e.target.value)}
                        >
                            <option value=''></option>
                            {
                                generateOptionsAn(2023, 1900)
                            }
                        </select>
                    </div>
                </div >
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="sexe">
                        Sexe:
                    </label>
                    <div className="flex items-center">
                        <select
                            value={sexe}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            name="sexe"
                            onChange={(e) => setSexe(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                    </div>
                </div >
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="profession">
                        Profession:
                    </label>
                    <input
                        value={profession}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-bl leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="profession"
                        onChange={(e) => setProfession(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="telephone">
                        Numéro de téléphone:
                    </label>
                    <input
                        value={tel}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-bl leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="telephone"
                        onChange={(e) => setTel(e.target.value)}
                    />
                </div>
                <div className="flex flex-col items-center justify-between">
                    <button
                        onClick={insertData}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Envoyer
                    </button>
                    {
                        err ? <h1 className='bg-[#edf913] p-2 rounded-md m-2'>{err}</h1> : null
                    }

                    {
                        msg ? <h1 className='bg-[#13b92e] p-2 rounded-md m-2'>{msg}</h1> : null
                    }
                </div>
            </div >
        </div>
    );
}

export default Form;
