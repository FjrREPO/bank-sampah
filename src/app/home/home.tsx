'use client'

import { useState, useEffect } from 'react'

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import { IoPerson, IoPersonCircle } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai"
import { FaShoppingCart, FaBell, FaSearch } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

interface UserMenuButtonProps {
    session: Session | null;
}

interface Product {
    id: string;
    description: string;
    imageUrl: string;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

const HomePage = ({ session }: UserMenuButtonProps) => {
    const user = session?.user;

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const [homeOverlay, setHomeOverlay] = useState(true)
    const [shopOverlay, setShopOverlay] = useState(false)
    const [notifOverlay, setNotifOverlay] = useState(false)
    const [profilOverlay, setProfilOverlay] = useState(false)
    const [tabungOverlay, setTabungOverlay] = useState(false)
    const [jemputanOverlay, setJemputanOverlay] = useState(false)
    const [tanyaJawabOverlay, setTanyaJawabOverlay] = useState(false)

    const handleHomeOverlay = () => {
        setHomeOverlay(true);
        setShopOverlay(false);
        setNotifOverlay(false);
        setProfilOverlay(false);
        setTabungOverlay(false);
        setJemputanOverlay(false);
        setTanyaJawabOverlay(false);
    }
    const handleShopOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(true);
        setNotifOverlay(false);
        setProfilOverlay(false);
        setTabungOverlay(false);
        setJemputanOverlay(false);
        setTanyaJawabOverlay(false);
    }
    const handleNotifOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(false);
        setNotifOverlay(true);
        setProfilOverlay(false);
        setTabungOverlay(false);
        setJemputanOverlay(false);
        setTanyaJawabOverlay(false);
    }
    const handleProfilOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(false);
        setNotifOverlay(false);
        setProfilOverlay(true);
        setTabungOverlay(false);
        setJemputanOverlay(false);
        setTanyaJawabOverlay(false);
    }
    const handleTabungOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(false);
        setNotifOverlay(false);
        setProfilOverlay(false);
        setTabungOverlay(true);
        setJemputanOverlay(false);
        setTanyaJawabOverlay(false);
    }
    const handleJemputanOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(false);
        setNotifOverlay(false);
        setProfilOverlay(false);
        setTabungOverlay(false);
        setJemputanOverlay(true);
        setTanyaJawabOverlay(false);
    }
    const handleTanyaJawabOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(false);
        setNotifOverlay(false);
        setProfilOverlay(false);
        setTabungOverlay(false);
        setJemputanOverlay(false);
        setTanyaJawabOverlay(true);
    }

    const dataSampah = [
        {
            nama: 'Botol Bening',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701708752/bank%20sampah/vqfily5owgglo6ai8cxy.png',
            poin: '3.000'
        },
        {
            nama: 'Botol Warna',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701712971/bank%20sampah/z5p0r7qetz4o20bepkui.png',
            poin: '2.500'
        },
        {
            nama: 'Tutup Botol',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701712972/bank%20sampah/ls018sdwiftyz74m4tr1.png',
            poin: '2.500'
        },
        {
            nama: 'Kaleng Minuman',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701712972/bank%20sampah/xm5naecndjav94gidfao.png',
            poin: '5.000'
        },
        {
            nama: 'Kertas HVS',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701712971/bank%20sampah/qxkfevnrvylzm7bk3inv.png',
            poin: '1.500'
        },
        {
            nama: 'Plastik Bening',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701712971/bank%20sampah/f29igxpbsoeo5qsvpztk.png',
            poin: '500'
        },
        {
            nama: 'PLastik Warna',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701712971/bank%20sampah/wgk1ysjakayj70basey1.png',
            poin: '200'
        },
        {
            nama: 'Minuman Gelas',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701712971/bank%20sampah/ldtihuzaseweypqxgki3.png',
            poin: '5.000'
        }
    ]
    const dataBankSampah = [
        {
            nama: 'Tempat Tisu',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701713385/bank%20sampah/ufdlnjc2smwqegdwflzg.png',
            poin: '40.000'
        },
        {
            nama: 'Tas',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701713387/bank%20sampah/yiunz3cxwbcrnnax7jpk.png',
            poin: '30.000'
        },
        {
            nama: 'Tas Belanja',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701713390/bank%20sampah/ybdpeolrdwdjxpjnqcfv.png',
            poin: '20.000'
        },
        {
            nama: 'Storage Box',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701713387/bank%20sampah/yhi3x2smcsmruburuo6i.png',
            poin: '25.000'
        },
        {
            nama: 'Tempat Sampah',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701713386/bank%20sampah/smxgoi7oycf4be0flne8.png',
            poin: '25.000'
        },
        {
            nama: 'Tas',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701713385/bank%20sampah/a8kj63cmw8shrg8hzkkc.png',
            poin: '20.000'
        },
        {
            nama: 'Vas Bunga',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701713386/bank%20sampah/q4yngxmqdwrb6ddz3red.png',
            poin: '30.000'
        },
        {
            nama: 'Rak',
            url: 'https://res.cloudinary.com/dutlw7bko/image/upload/v1701713388/bank%20sampah/mwrzfwjnjnjur1ewg8r8.png',
            poin: '35.000'
        }
    ]

    return (
        <div className="bg-mainbg min-h-[91vh] max-w-[100vw] bg-cover bg-no-repeat">
            {user ? (
                <div className="flex flex-col backdrop-blur-md w-full">
                    {homeOverlay &&
                        <>
                            <span className="flex flex-row items-center justify-center text-[30px] font-bold">
                                <IoPerson /> Nasabah
                            </span>
                            <div className="flex justify-center items-center w-full mt-[10vh] mb-[5vh]">
                                <div className="flex w-fit box-content gap-20 border-[2px] border-[#000] border-solid bg-[#7ed957] px-10 py-5 rounded-lg">
                                    <div className="flex flex-col float-left">
                                        <span className="text-sm font-bold">
                                            Poin Anda
                                        </span>
                                        <span className="text-sm font-bold">
                                            0
                                        </span>
                                        <span className="text-sm font-bold">
                                            {user.name}
                                        </span>
                                        <span className="text-sm font-bold">
                                            22110011
                                        </span>
                                    </div>
                                    <div className="flex flex-row top-0">
                                        <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701694112/bank%20sampah/admwdk8oxmxgjctmjgzw.png" alt="" className="items-center w-[25px] h-[25px]" />
                                        <div className="flex flex-col ml-[5px] mt-[-7px]">
                                            <span className="text-sm font-bold">
                                                BANK SAMPAH
                                            </span>
                                            <span className="text-[13px]">
                                                UNIRYO
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full pt-[5vh] pb-[7vh]">
                                <div className="flex flex-col w-full justify-center items-center">
                                    <div className="flex flex-row w-fit justify-center items-center gap-10 bg-[#e9e9e9] border-[2px] border-solid border-[#000] rounded-lg px-20 py-2 cursor-pointer">
                                        <span className="text-sm font-bold">
                                            Tukar Poin
                                        </span>
                                        <span className="text-sm font-bold">
                                            |
                                        </span>
                                        <span className="text-sm font-bold">
                                            Riwayat
                                        </span>
                                    </div>
                                    <div className="flex flex-row gap-10 mt-[5vh]">
                                        <button
                                            onClick={handleTabungOverlay}
                                            className="flex flex-col items-center justify-center border-[2px] border-solid border-[#000] p-2 bg-[#e9e9e9] rounded-lg font-bold text-sm">
                                            Tabung Sampah
                                            <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701695893/bank%20sampah/vczn4loqmxuabbvfajxc.png" alt=""
                                                className="w-[50px] h-[50px] items-center justify-center flex" />
                                        </button>
                                        <button
                                            onClick={handleJemputanOverlay}
                                            className="flex flex-col items-center justify-center border-[2px] border-solid border-[#000] p-2 bg-[#e9e9e9] rounded-lg font-bold text-sm">
                                            Penjemputan
                                            <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701695973/bank%20sampah/yfiedil9paamhhthdhvb.png" alt=""
                                                className="w-[50px] h-[50px] items-center justify-center flex" />
                                        </button>
                                        <button
                                            onClick={handleTanyaJawabOverlay}
                                            className="flex flex-col items-center justify-center border-[2px] border-solid border-[#000] p-2 bg-[#e9e9e9] rounded-lg font-bold text-sm">
                                            Tanya Jawab
                                            <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701695979/bank%20sampah/xufgylaganxusjzz8ev0.png" alt=""
                                                className="w-[50px] h-[50px] items-center justify-center flex" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row gap-20 mt-[10vh]">
                                        <button
                                            className={homeOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleHomeOverlay}>
                                            <AiFillHome className="text-[30px] flex justify-center" />Home
                                        </button>
                                        <button
                                            className={shopOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"} onClick={handleShopOverlay}>
                                            <FaShoppingCart className="text-[30px] flex justify-center" />Shop
                                        </button>
                                        <button
                                            className={notifOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"} onClick={handleNotifOverlay}>
                                            <FaBell className="text-[30px] flex justify-center" />Notifikasi
                                        </button>
                                        <button
                                            className={profilOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"} onClick={handleProfilOverlay}>
                                            <IoPersonCircle className="text-[30px] flex justify-center" />Profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {jemputanOverlay && (
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row'>
                                    <div className='ml-[3px] flex text-xl pl-2'>
                                        <button onClick={handleHomeOverlay} className='flex h-fit text-xl items-center'>
                                            <IoMdArrowRoundBack />
                                        </button>
                                        <span>Penjemputan</span>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-[#e9e9e9]'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.97055414075!2d110.37484495!3d-7.803250449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1701710275145!5m2!1sid!2sid" width="600" height="300" loading="lazy" ></iframe>
                                    <div className='flex justify-between mt-[5px]'>
                                        <span className='flex text-xl pl-2 font-medium'>Atur Lokasi Penjemputan</span>
                                        <button className='flex border-[2px] border-solid border-[#000] bg-[#7ed957] rounded-lg px-5 py-1'>Cari</button>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center gap-10 border-[2px] border-solid border-[#000] p-1 rounded-lg m-5 cursor-pointer'>
                                            <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701710737/bank%20sampah/wxlmgkirniizxeo6ivdy.png" alt="" className='w-[100px]' />
                                            <div className='flex flex-col'>
                                                <span>Gg. Panji 3 No. 104, Kenayan,</span>
                                                <span>Wedomartani, Kec. Ngemplak, .</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-10 border-[2px] border-solid border-[#000] p-1 rounded-lg m-5 cursor-pointer'>
                                            <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701710738/bank%20sampah/cd2mlzstuwkulpe5z4j7.png" alt="" className='h-[100px]' />
                                            <div className='flex flex-col'>
                                                <span>Gunakan Lokasi Lain</span>
                                                <span>Pilih lokasi atau tambahkan lokasi baru</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex mb-[5vh] w-full justify-center items-center'>
                                        <button className='flex w-fit items-center justify-center border-[2px] border-solid border-[#000] bg-[#7ed957] rounded-lg px-5 py-1'>Order Penjemputan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {tabungOverlay && (
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-row'>
                                <button onClick={handleHomeOverlay}>
                                    <IoMdArrowRoundBack />
                                </button>
                                <div className='ml-[3px]'>
                                    <span>Tabung Sampah</span>
                                </div>
                            </div>
                            <div className='flex mt-[5vh]'>
                                <input type="text" placeholder='Cari Sampah' className='flex ml-[5vw] p-2 pr-[30vw] rounded-full opacity-50 text-opacity-100' />
                            </div>
                            <div className='grid grid-cols-4 sm:grid-cols'>
                                {dataSampah.map((item, index) => (
                                    <div className='flex p-5' key={index}>
                                        <div className="flex flex-col p-5 max-w-sm bg-white border border-[#000] flex items-center justify-center border-[2px] rounded-lg bg-opacity-50 w-fit">
                                            <a href="#">
                                                <img className="rounded-lg h-[200px] w-[200px]" src={item.url} alt="" />
                                            </a>
                                            <div className="flex flex-col justify-center p-5 items-center">
                                                <h5 className="mb-2 text-2xl font-bold text-[#000]">{item.nama}</h5>
                                                <p className="mb-3 font-normal text-[#000]">{item.poin} poin/kg</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {shopOverlay && (
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-row'>
                                <button onClick={handleHomeOverlay}>
                                    <IoMdArrowRoundBack />
                                </button>
                                <div className='ml-[3px]'>
                                    <span>Bank Sampah Mart</span>
                                </div>
                            </div>
                            <div className='flex mt-[5vh]'>
                                <input type="text" placeholder='Cari Sampah' className='flex ml-[5vw] p-2 pr-[30vw] rounded-full opacity-50 text-opacity-100' />
                            </div>
                            <div className='grid grid-cols-4 sm:grid-cols'>
                                {dataBankSampah.map((item, index) => (
                                    <div className='flex p-5' key={index}>
                                        <div className="flex flex-col p-5 max-w-sm bg-white border border-[#000] flex items-center justify-center border-[2px] rounded-lg bg-opacity-50 w-fit">
                                            <a href="#">
                                                <img className="rounded-lg h-[200px] w-[200px]" src={item.url} alt="" />
                                            </a>
                                            <div className="flex flex-col justify-center p-5 items-center">
                                                <h5 className="mb-2 text-2xl font-bold text-[#000]">{item.nama}</h5>
                                                <p className="mb-3 font-normal text-[#000]">{item.poin} poin/kg</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {notifOverlay &&
                        <div className='flex w-full'>
                            <div className='flex flex-col bg-[#c1c1c1] pt-[5vh] pb-[5vh] pr-[5vw]'>
                                <div className='flex flex-row gap-10 items-center justify-between'>
                                    <div className='flex flex-row items-center'>
                                        <button onClick={handleHomeOverlay} className='text-xl'>
                                            <IoMdArrowRoundBack />
                                        </button>
                                        <div className='flex text-xl pl-2 font-bold'>
                                            <span>Tidak Ada Notifikasi</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10 items-center">
                                        <button
                                            className={homeOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleHomeOverlay}>
                                            <AiFillHome className="text-[25px] flex justify-center" />Home
                                        </button>
                                        <button
                                            className={shopOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleShopOverlay}>
                                            <FaShoppingCart className="text-[25px] flex justify-center" />Shop
                                        </button>
                                        <button
                                            className={notifOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleNotifOverlay}>
                                            <FaBell className="text-[25px] flex justify-center" />Notifikasi
                                        </button>
                                        <button
                                            className={profilOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleProfilOverlay}>
                                            <IoPersonCircle className="text-[25px] flex justify-center" />Profil
                                        </button>
                                    </div>
                                </div>
                                <div className='flex border-[2px] border-solid border-[#000] rounded-lg p-[20vw] w-fit ml-[5vw] mt-[5vh]'>
                                    <span>Notifikasi</span>
                                </div>
                            </div>
                        </div>
                    }
                    {profilOverlay &&
                        <div className='flex w-full'>
                            <div className='flex flex-col bg-[#c1c1c1] pt-[5vh] pb-[5vh] pr-[5vw]'>
                                <div className='flex flex-row gap-10 items-center justify-between'>
                                    <div className='flex flex-row items-center'>
                                        <button onClick={handleHomeOverlay} className='text-xl'>
                                            <IoMdArrowRoundBack />
                                        </button>
                                        <div className='flex text-xl pl-2'>
                                            <span>Akun Nasabah</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10 items-center">
                                        <button
                                            className={homeOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleHomeOverlay}>
                                            <AiFillHome className="text-[25px] flex justify-center" />Home
                                        </button>
                                        <button
                                            className={shopOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleShopOverlay}>
                                            <FaShoppingCart className="text-[25px] flex justify-center" />Shop
                                        </button>
                                        <button
                                            className={notifOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleNotifOverlay}>
                                            <FaBell className="text-[25px] flex justify-center" />Notifikasi
                                        </button>
                                        <button
                                            className={profilOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleProfilOverlay}>
                                            <IoPersonCircle className="text-[25px] flex justify-center" />Profil
                                        </button>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center border-[2px] border-solid border-[#000] rounded-lg p-[20vw] w-fit ml-[5vw] mt-[5vh]'>
                                    <IoPersonCircle className='flex h-[40px] w-[40px]' />
                                    <span className='flex justify-start items-start text-[30px] font-bold'>{user.name}</span>
                                    <div className='flex flex-col justify-center items-center mt-[10vh]'>
                                        <span className='flex justify-center items-center text-sm font-bold'>No. Telp</span>
                                        <span className='flex justify-center items-center text-sm font-bold'>0812121212</span>
                                        <span className='flex justify-center items-center text-sm font-bold pt-[5px]'>Email</span>
                                        <span className='flex justify-center items-center text-sm font-bold'>{user.name}</span>
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <button className='border-[2px] border-solid border-[#000] bg-[#7ed957] px-10 py-2 rounded-lg mt-[5vh]'>Edit Akun</button>
                                        <button className='border-[2px] border-solid border-[#000] bg-[#7ed957] px-10 py-2 rounded-lg' onClick={() => signOut()}>Log Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {tanyaJawabOverlay &&
                        <div className='flex w-full'>
                            <div className='flex flex-col bg-[#c1c1c1] pt-[5vh] pb-[5vh] pr-[5vw]'>
                                <div className='flex flex-row gap-10 items-center justify-between'>
                                    <div className='flex flex-row items-center'>
                                        <button onClick={handleHomeOverlay} className='text-xl'>
                                            <IoMdArrowRoundBack />
                                        </button>
                                        <div className='flex text-xl pl-2'>
                                            <span>Tanya Jawab</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10 items-center">
                                        <button
                                            className={homeOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleHomeOverlay}>
                                            <AiFillHome className="text-[25px] flex justify-center" />Home
                                        </button>
                                        <button
                                            className={shopOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleShopOverlay}>
                                            <FaShoppingCart className="text-[25px] flex justify-center" />Shop
                                        </button>
                                        <button
                                            className={notifOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleNotifOverlay}>
                                            <FaBell className="text-[25px] flex justify-center" />Notifikasi
                                        </button>
                                        <button
                                            className={profilOverlay ? "text-[#000] font-bold text-sm flex flex-col items-center" : "text-[#e9e9e9] font-bold text-sm flex flex-col items-center"}
                                            onClick={handleProfilOverlay}>
                                            <IoPersonCircle className="text-[25px] flex justify-center" />Profil
                                        </button>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center border-[2px] border-solid border-[#000] rounded-lg p-[5vw] w-fit ml-[5vw] mt-[5vh]'>
                                    <span className='flex justify-start items-start text-[30px] font-bold'>Hai, apa yang bisa kami bantu ?</span>
                                    <input type="text" placeholder='Tulis Keyword' className='flex ml-[5vw] p-2 pr-[30vw] rounded-full bg-[#e9e9e9]' />
                                    <div className='flex flex-col justify-center items-center mt-[5vh] gap-5 border-[2px] border-solid border-[#000] bg-[#e9e9e9] rounded-lg px-10 py-5'>
                                        <div className='flex flex-row justify-between items-center w-full'>
                                            <span className='flex justify-center items-center text-sm font-bold'>Apa itu Bank Sampah Unriyo ?</span><MdKeyboardArrowDown />
                                        </div>
                                        <div className='flex flex-row justify-between items-center w-full'>
                                            <span className='flex justify-center items-center text-sm font-bold'>Bagaimana cara menukar Poin ?</span><MdKeyboardArrowDown />
                                        </div>
                                        <div className='flex flex-row justify-between items-center w-full'>
                                            <span className='flex justify-center items-center text-sm font-bold'>Bagaimana proses penjemputan sampah ?</span><MdKeyboardArrowDown />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-[15px]'>
                                        <span className='flex justify-center text-xl font-bold'>FAQ and Support</span>
                                        <span className='flex justify-center text-sm font-medium'>Tidak menemukan jawaban yang anda cari? Hubungi pusat layanan kami</span>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-10 mt-[10px]'>
                                        <span className='text-md font-medium flex-row flex items-center gap-2'><BiWorld/>Website</span>
                                        <span className='text-md font-medium flex-row flex items-center gap-2'><FaWhatsapp/>Whatsapp</span>
                                        <span className='text-md font-medium flex-row flex items-center gap-2'><MdOutlineEmail/>Email</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            ) : (
                <div className="flex flex-col backdrop-blur-md">
                    <span className="flex justify-center text-[50px] font-bold">
                        SELAMAT DATANG
                    </span>
                    <span className="flex justify-center text-[50px] font-bold">
                        DI BANK SAMPAH
                    </span>
                    <span className="flex justify-center text-[50px] font-medium">
                        UNIRYO
                    </span>
                    <span className="flex justify-center text-[25px] font-medium mt-[10vh]">
                        Dari Kampus, Untuk Lingkungan.
                    </span>
                    <span className="flex justify-center text-[25px] font-medium">
                        Daftar di web bank sampah dan jadi bagian dari perubahan!
                    </span>
                    <div className="flex justify-center gap-5 mt-[20vh] mb-[10vh]">
                        <button className="border-[2px] border-solid border-[#000] bg-[#7ed957] py-5 px-20 rounded-lg" onClick={() => signIn()}>Masuk</button>
                        <button className="border-[2px] border-solid border-[#000] bg-[#7ed957] py-5 px-20 rounded-lg" onClick={() => signIn()}>Daftar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage