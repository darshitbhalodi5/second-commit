import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [Language, AnimatedLanguage] = createIcon({
  name: 'Language',
  getIcon: (props) => (
    <Svg fill="none" viewBox="0 0 40 40" {...props}>
      <Path d="M29.0163 16.2065L31.125 22H26.9077L29.0163 16.2065Z" fill="currentColor" />
      <Path
        clipRule="evenodd"
        d="M19 14C19 10.2288 19 8.34315 20.1716 7.17157C21.3431 6 23.2288 6 27 6H31.7092C35.6054 6 37.5534 6 38.7331 7.2225C39.9127 8.445 39.8432 10.3918 39.7041 14.2855L39.2756 26.2855C39.1454 29.9331 39.0802 31.7569 37.9179 32.8785C36.7556 34 34.9306 34 31.2807 34H27C23.2288 34 21.3431 34 20.1716 32.8284C19 31.6569 19 29.7712 19 26V14ZM24.7238 28H21.5313L27.3813 11.9272L30.3604 11.1284L36.5012 28H33.3087L32.2168 25.0001H25.8157L24.7238 28Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <Path
        d="M0.5 12H7V9.99995L10 9.19995V12H16V15H13.9909C13.8759 18.1602 12.6746 21.0432 10.7493 23.2868C12.2709 24.2846 14.0673 24.8979 16.0005 24.9883L15.9999 25L15.216 27.9397C12.7163 27.704 10.415 26.7866 8.49982 25.3755C6.57251 26.7955 4.25411 27.7156 1.73604 27.9442L1 25L0.999469 24.9883C2.93248 24.8978 4.72882 24.2846 6.25034 23.2868C5.02453 21.8583 4.09221 20.1706 3.54687 18.3172L6.44643 17.54C6.86904 18.9394 7.57588 20.2156 8.49982 21.3013C9.95832 19.5874 10.8758 17.399 10.9883 15H1.25L0.5 12Z"
        fill="currentColor"
      />
    </Svg>
  ),
})
