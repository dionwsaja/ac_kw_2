import centang from "../assets/images/Curryculum/centang.svg";
import { FaPlay, FaPlayCircle } from "react-icons/fa";

import img1 from "../assets/images/Timeline2/1.webp";
import img2 from "../assets/images/Timeline2/2.webp";
import img3 from "../assets/images/Timeline2/3.webp";
import img4 from "../assets/images/Timeline2/4.webp";
import img5 from "../assets/images/Timeline2/5.webp";
import img6 from "../assets/images/Timeline2/6.webp";
import img7 from "../assets/images/Timeline2/7.webp";
import img8 from "../assets/images/Timeline2/8.webp";
import img9 from "../assets/images/Timeline2/9.webp";
import img10 from "../assets/images/Timeline2/10.webp";
import img11 from "../assets/images/Timeline2/11.webp";
import img12 from "../assets/images/Timeline2/12.webp";
import img13 from "../assets/images/Timeline2/13.webp";
import img14 from "../assets/images/Timeline2/14.webp";

const Timeline2 = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-8">
      <div className="px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-y-6 items-center mb-16">
          <div className="flex justify-center">
            <p className="gradient-1 font-bold tracking-[0.2em]">
              KURIKULUM PROGRAM
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-white text-6xl font-bold">
              <span className="text-slate-500 text-xl">01.</span>Edukasi
            </p>
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img1} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Crypto </span>
                    Investing
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">18+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kalian akan gua pandu pribadi step by step dari
                  Mindset berinvestasi di crypto, cara melihat siklus pasar
                  untuk tau kapan masuk dan keluar, menganalisa tipe-tipe
                  cryptocurrency, cara melihat attention economy didalam crypto,
                  cara meriset crypto dan menghitung harga wajarnya,
                </p>
                <p>
                  Bagaimana cara mengatur resiko didalam portofolio, cara
                  melihat korelasi anatara bitcoin dan altcoin, bagaimana cara
                  nyontek “smart money” sampai contekan portofolio gua supaya
                  kalian bisa dapat gambaran bagaimana menyusun portofolio yang
                  baik.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img2} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Crypto </span>
                    Trading
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">50+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kalian akan belajar dari 0 sampai bisa trading
                  crypto secara mahir, dari pengenalan trading crypto, dow
                  theory, dasar dari analisa teknikal, bagaimana cara mengukur
                  setup sebuah trade, dasar dari kontrak futures, manajemen
                  resiko, bagaimana cara masuk ke sebuah posisi dan mengukur
                  resiko, behavioural dari market, pattern recognition,
                  psikologi dalam trading, sampai live trading bareng bersama
                  komunitas.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img3} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Crypto </span>
                    Research
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">18+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kalian akan belajar lebih dalam tentang bagaimana
                  cara meriset suatu cryptocurrency secara dalam, gimana cara
                  melihat value proposition dari sebuah project, mengerti
                  problem apa yang diselesaikan oleh crypto tersebut, cara
                  melakukan qualitative & quantiative analysis,
                </p>
                <p>
                  Praktek cara menggunakan dashboard dari token terminal,
                  mengerti struktur ekonomis dari sebuah token seperti fee
                  transaksi, block rewards, dan fee burns. Kalian akan
                  mendapatkan juga cara menggarap airdrop, praktek langsung di
                  Zksync dan Layer Zero.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img4} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">
                      Bitcoin: the Currency of{" "}
                    </span>
                    the Internet
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">12+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul Bitcoin kalian akan belajar secara terstruktur
                  tentang teknologi yang akan merubah dunia, yaitu bitcoin. Dari
                  awal sejarah uang secara detail, whitepaper bitcoin yang akan
                  dibedah bersama, dasar dari kriptografi, fundamental dari
                  bitcoin seperti bitcoin nodes, wallets, key & address, bitcoin
                  mining, consensus attack, lightning network, sampai keamanan
                  dari bitcoin.
                </p>
                <p className="hidden">
                  Praktek cara menggunakan dashboard dari token terminal,
                  mengerti struktur ekonomis dari sebuah token seperti fee
                  transaksi, block rewards, dan fee burns. Kalian akan
                  mendapatkan juga cara menggarap airdrop, praktek langsung di
                  Zksync dan Layer Zero.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img5} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Bitcoin: </span>
                    Transaction
                    <span className="text-white"> in Depth</span>
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">9+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kita akan mempelajari transaksi bitcoin secara
                  dalam seperti cara kerja base58check encoding, Bitcoin
                  scripting, Pay to Adress (P2A), Pay to public key (P2PK), Hash
                  locked transaction (HLT), Check lock time verify (CLTV), dan
                  praktek langsung dengan IDE.
                </p>
                <p className="hidden">
                  Praktek cara menggunakan dashboard dari token terminal,
                  mengerti struktur ekonomis dari sebuah token seperti fee
                  transaksi, block rewards, dan fee burns. Kalian akan
                  mendapatkan juga cara menggarap airdrop, praktek langsung di
                  Zksync dan Layer Zero.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img6} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Ethereum: </span>
                    Programmable
                    <span className="text-white"> Money</span>
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">13+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kalian akan belajar semua yang perlu kalian tau
                  tentang ethereum atau biasa disebut “the world computer”.
                  Mulai dari pengenalan ethereum, perbedaan Bitcoin dan
                  Ethereum, dari awal sejarahnya, komponen dari ethereum, basic
                  dari denominasi ethereum, wallet, dan networks, struktur
                  transaksinya, transaction nonce, gas, & gas limit,
                </p>
                <p>
                  the Merge yaitu transisi dari PoW (Proof of Work) ke PoS
                  (Proof of stake) yang di eksekusi 15 september 2022 kemarin,
                  integrasi beacon chain dan mainnet, basic dari EVM (Ethereum
                  Virtual Machine) sampai cara staking ethereum untuk
                  mendapatkan bunga.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img7} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Monero: </span>
                    Anonymity
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">9+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kalian akan belajar secara mendalam tentang salah
                  satu cryptocurrency yang paling terkenal dengan anonimitasnya
                  yaitu monero, dari ransom case di norwa tahun 2018, sejarah
                  dari monero, backrground dari cryptocurrency privacy,
                  transaksi monero secara detail, problem anonimitas yang ada,
                  Monero Ring Attack (MRA), masalah dari Key reuse.
                </p>
                <p className="hidden">
                  the Merge yaitu transisi dari PoW (Proof of Work) ke PoS
                  (Proof of stake) yang di eksekusi 15 september 2022 kemarin,
                  integrasi beacon chain dan mainnet, basic dari EVM (Ethereum
                  Virtual Machine) sampai cara staking ethereum untuk
                  mendapatkan bunga.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img8} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Cryptocurency </span>
                    Fundamental
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">15+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kita akan belajar tentang crypto secara
                  fundamental, seperti dasar dari kriptografi dan Hash Function,
                  apa itu Byzantine Generals problem, basic dari Bitcoin dan
                  Blockchain, konsep mining crypto, cara kerja wallet crypto,
                  usage dari Bitcoin, Blockchain & consensus algorithm, keamanan
                  dalam blockchain, masalah dalam Blockchain, privasi dan
                  anonimitas, perangkat anonimitas, pemanfaatan blockchain dan
                  teknologi dari blockchain itu sendiri.
                </p>
                <p className="hidden">
                  the Merge yaitu transisi dari PoW (Proof of Work) ke PoS
                  (Proof of stake) yang di eksekusi 15 september 2022 kemarin,
                  integrasi beacon chain dan mainnet, basic dari EVM (Ethereum
                  Virtual Machine) sampai cara staking ethereum untuk
                  mendapatkan bunga.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img9} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Crypto </span>
                    Self Custody
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">7+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kalian akan belajar salah satu hal paling penting
                  di crypto yaitu gimana cara mengamankan coin kalian sendiri.
                  Kita akan belajar dari cara menyimpan crypto dengan aman
                  dengan memegang private key kalian sendiri (gak membiarkan
                  coin kalian ada di CEX seperti binance).
                </p>
                <p className="block">
                  Perbedaan hot dan cold wallet, cara setup cold wallet, cara
                  reset dan recover cold wallet kalian, cara menghubungkan cold
                  wallet kalian ke desktop app, testnet di ledger, cara
                  menyambungkan cold wallet dengan metamask, dan cara transaksi
                  dengan cold wallet kalian.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img10} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Cryptocurrency </span>
                    Security
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">15+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kita akan belajar mengenai keamanan crypto secara
                  mendalam, dari Blockchain & security overview, komponen sistem
                  dari blockchain, blockchain execution environment, masalah
                  keamanan didalam blockchain, teknik kriptografi, blockchain
                  memory pool (Mempool), miner extractable value (MEV), finality
                  issues, solidity issues, permanent contract & upgradable
                  contract, decentralized finance issues, user issues, dan best
                  practices untuk security crypto.
                </p>
                <p className="hidden">
                  Perbedaan hot dan cold wallet, cara setup cold wallet, cara
                  reset dan recover cold wallet kalian, cara menghubungkan cold
                  wallet kalian ke desktop app, testnet di ledger, cara
                  menyambungkan cold wallet dengan metamask, dan cara transaksi
                  dengan cold wallet kalian.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img11} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Smart Contact </span>
                    Security
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">10+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kalian akan belajar secara advanced tentang smart
                  contract security, modul ini dibuat untuk kalian yang mau
                  bekerja dibidang auditor smart contract. Kalian akan belajar
                  dari cara menjadi auditor security dari pengalaman dan
                  resikonya, proses auditing security, tools dan techniques yang
                  digunakan, sampai praktik cara mencari angka tersembunyi dari
                  sebuah smart contract.
                </p>
                <p>
                  Perbedaan hot dan cold wallet, cara setup cold wallet, cara
                  reset dan recover cold wallet kalian, cara menghubungkan cold
                  wallet kalian ke desktop app, testnet di ledger, cara
                  menyambungkan cold wallet dengan metamask, dan cara transaksi
                  dengan cold wallet kalian.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img12} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Blockchain </span>
                    interoperability
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">15+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Di modul ini kalian akan belajar tentang konsep dari
                  blockchain interoperability yaitu sebuah ide untuk
                  mengaktifkan jaringan blockchain yang berbeda untuk
                  berinteraksi, berintegrasi, berkomunikasi secara mulus untuk
                  memungkinkan transfer data antar chain.
                </p>
                <p>
                  Kalian akan belajar secara lengkap dari landscape blockchain
                  interoperability, blockchain dbms, multi blockchain
                  environment, blockchain joint, blockchain extension
                  (sidechain), desentralized exchange, state pinning, consensus,
                  communication & standardisation, bridge, benefit & drawbacks,
                  dan studi kasus blockchain in SCM approach.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] border- border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8  ">
              <img src={img13} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-[1px] border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Smart Contact </span>
                    Development
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">61+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  di modul ini kalian akan belajar skill programming paling
                  mahal di dunia yaitu belajar coding di internet masa depan
                  dengan teknologi smart contract atau biasa disebut dengan
                  web3. ini adalah materi yang kalian gaakan temuin di
                  universitas manapun di Indonesia.
                </p>
                <p>
                  disini kalian akan di bimbing oleh praktisi langsung step by
                  step dari bahasa pemrograman solidity, struktur smart
                  contract, Remix interface, Mnemonic phrases, sampai deployment
                  smart contract.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row  border-opacity-50 border-dashed md:border-s-0 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pe-16 text-right md:pb-8 flex justify-center items-center pb-8  ">
              <img src={img14} className="ms-12 md:ms-0" />
            </div>
            <div className="md:w-1/2 md:border-s-0 border-dashed border-opacity-40 md:ps-8 pb-8 md:pb-0 flex flex-col ">
              <div className="flex flex-col gap-y-2 mb-4">
                <div className="flex ps-8 md:pe-24">
                  <p className="gradient-1 font-bold text-2xl md:text-4xl">
                    <span className="text-white">Sales </span>
                    Mastery
                  </p>
                </div>
                <div className="flex items-center ps-8 gap-x-3">
                  <FaPlayCircle className="text-gray-800 bg-white rounded-full text-xl" />
                  <span className="text-white text-sm">16+ Modul</span>
                </div>
              </div>
              <div className="text-slate-200 text-sm md:text-md ps-8 flex flex-col gap-y-4 pe-8 md:pe-12">
                <p>
                  Sales Mastery adalah bonus modul tambahan di Akademi Crypto,
                  disini kalian akan mendapatkan ilmu fundamental dari jualan
                  supaya kalian bisa jual apapun, kapanpun, ke siapapun,
                  dimanapun. Kalian akan belajar secara detail dari psikologi
                  jualan, mentalitas seorang sales, decision making flow, seni
                  dari storytelling, seni persuasi orang, funnel sales, sampai
                  objection handling client.
                </p>
                <p className="hidden">
                  disini kalian akan di bimbing oleh praktisi langsung step by
                  step dari bahasa pemrograman solidity, struktur smart
                  contract, Remix interface, Mnemonic phrases, sampai deployment
                  smart contract.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={centang}
              className="w-[20px] absolute top-0 left-0 -translate-x-[10px] -translate-y-4 z-50 md:w-[40px] md:left-[50%] md:-translate-x-3"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center pt-10">
            <button className="button-2 gap-x-2">
              <span>
                <FaPlay className=" w-3 opacity-50 relative z-10" />
              </span>
              <span className="relative z-10">Join Now</span>
              <span>
                <FaPlay className="rotate-180 w-3 opacity-50 relative z-10" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline2;
