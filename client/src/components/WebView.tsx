interface WebViewProps {
  url: string
}

const WebView = ({ url }: WebViewProps) => {
  return (
    <div className="flex-1 bg-white">
      <iframe
        src={url}
        className="w-full h-full border-0"
        title="Browser Content"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  )
}

export default WebView