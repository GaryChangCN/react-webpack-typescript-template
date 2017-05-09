import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'
import moduleA from './moduleA'

class Index extends React.Component<any, any> {
    async componentWillMount () {
        const res = await moduleA()
        console.log(res)
    }
    render () {
        return (
            <div className="title">
                <h2>React Webpack Typescript Template Success</h2>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'))
