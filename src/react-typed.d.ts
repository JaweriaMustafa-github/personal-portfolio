declare module 'react-typed' {
    import { Component } from 'react';
  
    interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      backDelay?: number;
      showCursor?: boolean;
      cursorChar?: string;
    }
  
    export default class Typed extends Component<TypedProps> {}
  }