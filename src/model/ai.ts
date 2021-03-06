import { Keyword } from '@/component/editor/keywords'

class AI {
	public id!: number
	public name!: string
	public code!: string
	public valid!: boolean
	public v2!: boolean
	public modified: boolean = false
	public dragging: boolean = false
	public folder!: number
	public path!: string
	public includes: AI[] = []
	public functions: Keyword[] = []
}
export { AI }
