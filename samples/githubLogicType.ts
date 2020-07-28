// Auto-generated with kea-typegen. DO NOT EDIT!

export interface githubLogicType<Repository> {
    key: any
    actionCreators: {
        setUsername: (
            username: string,
        ) => {
            type: 'set username (samples.githubLogic)'
            payload: { username: string }
        }
        setRepositories: (
            repositories: Repository[],
        ) => {
            type: 'set repositories (samples.githubLogic)'
            payload: { repositories: Repository[] }
        }
        setFetchError: (
            error: string,
        ) => {
            type: 'set fetch error (samples.githubLogic)'
            payload: { error: string }
        }
    }
    actionKeys: {
        'set username (samples.githubLogic)': 'setUsername'
        'set repositories (samples.githubLogic)': 'setRepositories'
        'set fetch error (samples.githubLogic)': 'setFetchError'
    }
    actionTypes: {
        setUsername: 'set username (samples.githubLogic)'
        setRepositories: 'set repositories (samples.githubLogic)'
        setFetchError: 'set fetch error (samples.githubLogic)'
    }
    actions: {
        setUsername: (
            username: string,
        ) => {
            type: 'set username (samples.githubLogic)'
            payload: { username: string }
        }
        setRepositories: (
            repositories: Repository[],
        ) => {
            type: 'set repositories (samples.githubLogic)'
            payload: { repositories: Repository[] }
        }
        setFetchError: (
            error: string,
        ) => {
            type: 'set fetch error (samples.githubLogic)'
            payload: { error: string }
        }
    }
    cache: Record<string, any>
    connections: any
    constants: any
    defaults: any
    events: any
    path: ['samples', 'githubLogic']
    pathString: 'samples.githubLogic'
    propTypes: any
    props: Record<string, any>
    reducer: (
        state: any,
        action: () => any,
        fullState: any,
    ) => {
        username: string
        repositories: Repository[]
        isLoading: boolean
        error: string | null
    }
    reducerOptions: any
    reducers: {
        username: (state: string, action: any, fullState: any) => string
        repositories: (state: Repository[], action: any, fullState: any) => Repository[]
        isLoading: (state: boolean, action: any, fullState: any) => boolean
        error: (state: string | null, action: any, fullState: any) => string | null
    }
    selector: (
        state: any,
    ) => {
        username: string
        repositories: Repository[]
        isLoading: boolean
        error: string | null
    }
    selectors: {
        username: (state: any, props: any) => string
        repositories: (state: any, props: any) => Repository[]
        isLoading: (state: any, props: any) => boolean
        error: (state: any, props: any) => string | null
        sortedRepositories: (state: any, props: any) => Repository[]
    }
    values: {
        username: string
        repositories: Repository[]
        isLoading: boolean
        error: string | null
        sortedRepositories: Repository[]
    }
    _isKea: true
    __keaTypeGenInternalSelectorTypes: {
        sortedRepositories: (arg1: Repository[]) => Repository[]
    }
}
