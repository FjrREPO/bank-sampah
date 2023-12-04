'use client'

import { useState, useEffect } from 'react'

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

import { IoPerson, IoPersonCircle } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai"
import { FaShoppingCart, FaBell } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { redirect } from "next/navigation";

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

async function searchProducts(formData: FormData) {
    const searchQuery = formData.get("searchQuery")?.toString();

    if (searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

const HomePage = async ({ session }: UserMenuButtonProps) => {
    const user = session?.user;
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                const fetchedProducts = await prisma.product.findMany({
                    orderBy: { id: "desc" }
                });
                setProducts(fetchedProducts);
            }
        };

        fetchData();
    }, [session]);

    const [homeOverlay, setHomeOverlay] = useState(true)
    const [shopOverlay, setShopOverlay] = useState(false)
    const [notifOverlay, setNotifOverlay] = useState(false)
    const [profilOverlay, setProfilOverlay] = useState(false)

    const handleHomeOverlay = () => {
        setHomeOverlay(true);
        setShopOverlay(false);
        setNotifOverlay(false);
        setProfilOverlay(false);
    }
    const handleShopOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(true);
        setNotifOverlay(false);
        setProfilOverlay(false);
    }
    const handleNotifOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(false);
        setNotifOverlay(true);
        setProfilOverlay(false);
    }
    const handleProfilOverlay = () => {
        setHomeOverlay(false);
        setShopOverlay(false);
        setNotifOverlay(false);
        setProfilOverlay(true);
    }

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
                                        <button className="flex flex-col items-center justify-center border-[2px] border-solid border-[#000] p-2 bg-[#e9e9e9] rounded-lg font-bold text-sm">
                                            Tabung Sampah
                                            <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701695893/bank%20sampah/vczn4loqmxuabbvfajxc.png" alt=""
                                                className="w-[50px] h-[50px] items-center justify-center flex" />
                                        </button>
                                        <button className="flex flex-col items-center justify-center border-[2px] border-solid border-[#000] p-2 bg-[#e9e9e9] rounded-lg font-bold text-sm">
                                            Penjemputan
                                            <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701695973/bank%20sampah/yfiedil9paamhhthdhvb.png" alt=""
                                                className="w-[50px] h-[50px] items-center justify-center flex" />
                                        </button>
                                        <button className="flex flex-col items-center justify-center border-[2px] border-solid border-[#000] p-2 bg-[#e9e9e9] rounded-lg font-bold text-sm">
                                            Tanya Jawab
                                            <img src="https://res.cloudinary.com/dutlw7bko/image/upload/v1701695979/bank%20sampah/xufgylaganxusjzz8ev0.png" alt=""
                                                className="w-[50px] h-[50px] items-center justify-center flex" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row gap-20 mt-[10vh]">
                                        <button className="text-[#e9e9e9] font-bold text-sm flex flex-col items-center" onClick={handleHomeOverlay}>
                                            <AiFillHome className="text-[30px] flex justify-center" />Home
                                        </button>
                                        <button className="text-[#e9e9e9] font-bold text-sm flex flex-col items-center" onClick={handleShopOverlay}>
                                            <FaShoppingCart className="text-[30px] flex justify-center" />Shop
                                        </button>
                                        <button className="text-[#e9e9e9] font-bold text-sm flex flex-col items-center" onClick={handleNotifOverlay}>
                                            <FaBell className="text-[30px] flex justify-center" />Notifikasi
                                        </button>
                                        <button className="text-[#e9e9e9] font-bold text-sm flex flex-col items-center" onClick={handleProfilOverlay}>
                                            <IoPersonCircle className="text-[30px] flex justify-center" />Profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {shopOverlay &&
                        <>
                            <div>
                                <button><IoMdArrowRoundBack /></button>
                                <div>
                                    <span>
                                        Tabung Sampah
                                    </span>
                                    <form action={searchProducts}>
                                        <div className="form-control">
                                            <input
                                                name="searchQuery"
                                                placeholder="Cari Sampah"
                                                className="input-bordered input w-full min-w-[100px]"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="hero rounded-xl bg-base-200">
                                        <div className="hero-content flex-col lg:flex-row">
                                            <Image
                                                src={products[0].imageUrl}
                                                alt={products[0].name}
                                                width={400}
                                                height={800}
                                                className="w-full max-w-sm rounded-lg shadow-2xl"
                                                priority
                                            />
                                            <div>
                                                <h1 className="text-5xl font-bold">{products[0].name}</h1>
                                                <p className="py-6">{products[0].description}</p>
                                                <Link
                                                    href={"/products/" + products[0].id}
                                                    className="btn-primary btn"
                                                >
                                                    Check it out
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
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