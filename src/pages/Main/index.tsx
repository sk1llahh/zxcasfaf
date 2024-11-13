import React, {useEffect, useMemo, useRef, useState} from "react";
import {gsap} from "gsap";
import {AnimateBg, DotsSidebar, MainPage} from "./index.styles";
import {
  MainSection1 as Section1,
  MainSection2 as Section2,
  MainSection3 as Section3,
  MainSection4 as Section4,
  MainSection5 as Section5,
  MainSection6 as Section6
} from "../../components";
import {useTheme} from "../../hooks";
import {THEME} from "../../constants";
import {Grid} from "antd";
import {useDispatch} from "react-redux";
import {setCurrentBlock} from "../../store/common/actions";

const {useBreakpoint} = Grid;
export const Main = () => {
  const screens = useBreakpoint();
  const {themeConfig, theme} = useTheme()
  const dispatch = useDispatch()

  const COLOR_MILK = 'rgba(255, 223, 124, 0.5)'
  const COLOR_PINK = 'rgba(250, 183, 184, 1)'

  const COLOR_LIGHT = theme === THEME.LIGHT ? themeConfig.token.primary : 'rgba(255, 223, 124, 0.5)'
  const COLOR_DARK = theme === THEME.LIGHT ? 'rgba(6, 17, 34, 1)' : 'rgba(255, 255, 255, 1)'

  const LEFT_GRADIENT = `radial-gradient(88.33% 60.62% at 10.33% 58.33%, ${COLOR_LIGHT} 0%, ${COLOR_DARK} 100%)`
  const RIGHT_GRADIENT = `radial-gradient(88.33% 60.62% at 100.87% 48.33%, ${COLOR_LIGHT} 0%, ${COLOR_DARK} 100%)`
  const TOP_GRADIENT = `radial-gradient(80% 80% at 50% 0%, ${COLOR_LIGHT} 0%, ${COLOR_DARK} 100%)`;
  const BOTTOM_GRADIENT = `radial-gradient(50% 100% at 50% 100%, ${COLOR_LIGHT} 0%, ${COLOR_DARK} 100%)`
  const CENTER_GRADIENT = `radial-gradient(50% 50% at 50% 50%, ${COLOR_LIGHT} 0%, ${COLOR_DARK} 100%)`


  const arrayOfBlocks = [
    {component: <Section1/>, gradient: CENTER_GRADIENT, label: 'Главная'},
    {component: <Section2/>, gradient: CENTER_GRADIENT, label: 'Продукты'},
    {component: <Section3/>, gradient: TOP_GRADIENT, label: 'Преимущества'},
    {component: <Section4/>, gradient: RIGHT_GRADIENT, label: 'Преподавателям'},
    {component: <Section5/>, gradient: LEFT_GRADIENT, label: 'Обучающимся'},
    {component: <Section6/>, gradient: BOTTOM_GRADIENT, label: 'Отзывы'},
  ]

  const blockRefs = useRef(arrayOfBlocks.map(() => React.createRef()))
  const backgroundRef = useRef(null)

  const [activeBlock, setActiveBlock] = useState(0)

  useEffect(() => {
    setGradient(0)

    dispatch(setCurrentBlock({
      current: 0,
      total: arrayOfBlocks.length + 1
    }))
  }, [])

  const setGradient = (index: any) => {
    if (screens.md) {
      const targetGradient = arrayOfBlocks[index].gradient;

      gsap.to(backgroundRef.current, {
        duration: 1,
        background: targetGradient ? targetGradient : 'transparent',
        ease: 'power1.inOut',
      });
      // @ts-ignore
      blockRefs.current[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleScroll = (event: any) => {
    const delta = event.deltaY || event.detail || -event.wheelDelta;
    const direction = delta > 0 ? 1 : -1;
    const newIndex = activeBlock + direction;

    if (newIndex >= 0 && newIndex < arrayOfBlocks.length) {
      setActiveBlock(newIndex);
      setGradient(newIndex)

      dispatch(setCurrentBlock({
        current: newIndex + 1,
        total: arrayOfBlocks.length + 1
      }))
    }
  };

  const handleDotClick = (dotIndex: any) => {
    setActiveBlock(dotIndex);
    setGradient(dotIndex)

    dispatch(setCurrentBlock({
      current: dotIndex + 1,
      total: arrayOfBlocks.length + 1
    }))
  }

  useEffect(() => {
    const handleWheel = (event: any) => handleScroll(event)
    document.addEventListener('wheel', handleWheel)

    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [activeBlock, theme, screens])

  useEffect(() => {
    setGradient(activeBlock)
  }, [theme])

  return (
    <MainPage>
      <AnimateBg ref={backgroundRef}/>

      {
        arrayOfBlocks.map((block: any, blockIndex: any) => (
          // @ts-ignore
          <section ref={blockRefs.current[blockIndex]} key={blockIndex} id={`main-${blockIndex}`}>
            {block.component}
          </section>
        ))
      }

      {
        screens.xl &&
          <DotsSidebar>
            {
              arrayOfBlocks.map((dot, dotIndex) => (
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                  height: 40
                }} key={dotIndex}>
                  <div style={{
                    background: dotIndex === activeBlock ? 'transparent' : '#4C2779',
                    borderRadius: '50%',
                    width: 8,
                    height: 8,
                    border: dotIndex === activeBlock ? '2px solid #773DBD' : '1px solid transparent',
                    cursor: 'pointer',
                    boxSizing: 'content-box',
                  }}
                       onClick={() => handleDotClick(dotIndex)}
                  >
                  </div>

                  <div
                    style={{
                      background: '#773DBD',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      opacity: dotIndex === activeBlock ? 1 : 0,
                      transition: 'opacity 0.5s ease',
                    }}
                    className={`label-${dotIndex}`}
                  >
                    {dot.label}
                  </div>

                </div>
              ))
            }
          </DotsSidebar>
      }

    </MainPage>
  )
}
