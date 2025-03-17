// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_1D_TSORT_METADATA: Metadata = {
    id: "f4d144dd2a33cb2a0c2516cb757ba2a8c82c7262.boutiques",
    name: "1dTsort",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V1dTsortParameters {
    "__STYXTYPE__": "1dTsort";
    "inc_order": boolean;
    "dec_order": boolean;
    "transpose": boolean;
    "column"?: number | null | undefined;
    "imode": boolean;
    "infile": InputPathType;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "1dTsort": v_1d_tsort_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_1d_tsort(...)`.
 *
 * @interface
 */
interface V1dTsortOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_1d_tsort_params(
    infile: InputPathType,
    inc_order: boolean = false,
    dec_order: boolean = false,
    transpose: boolean = false,
    column: number | null = null,
    imode: boolean = false,
): V1dTsortParameters {
    /**
     * Build parameters.
    
     * @param infile Input 1D file to be sorted.
     * @param inc_order Sort into increasing order [default]
     * @param dec_order Sort into decreasing order
     * @param transpose Transpose the file before output.
     * @param column Sort only on column #j (counting starts at 0), and carry the rest of the columns with it.
     * @param imode Typecast all values to integers, return the mode in the input then exit. No sorting results are returned.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "1dTsort" as const,
        "inc_order": inc_order,
        "dec_order": dec_order,
        "transpose": transpose,
        "imode": imode,
        "infile": infile,
    };
    if (column !== null) {
        params["column"] = column;
    }
    return params;
}


function v_1d_tsort_cargs(
    params: V1dTsortParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("1dTsort");
    if ((params["inc_order"] ?? null)) {
        cargs.push("-inc");
    }
    if ((params["dec_order"] ?? null)) {
        cargs.push("-dec");
    }
    if ((params["transpose"] ?? null)) {
        cargs.push("-flip");
    }
    if ((params["column"] ?? null) !== null) {
        cargs.push(
            "-col",
            String((params["column"] ?? null))
        );
    }
    if ((params["imode"] ?? null)) {
        cargs.push("-imode");
    }
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    return cargs;
}


function v_1d_tsort_outputs(
    params: V1dTsortParameters,
    execution: Execution,
): V1dTsortOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V1dTsortOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_1d_tsort_execute(
    params: V1dTsortParameters,
    execution: Execution,
): V1dTsortOutputs {
    /**
     * Sorts each column of the input 1D file and writes result to stdout.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V1dTsortOutputs`).
     */
    params = execution.params(params)
    const cargs = v_1d_tsort_cargs(params, execution)
    const ret = v_1d_tsort_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_1d_tsort(
    infile: InputPathType,
    inc_order: boolean = false,
    dec_order: boolean = false,
    transpose: boolean = false,
    column: number | null = null,
    imode: boolean = false,
    runner: Runner | null = null,
): V1dTsortOutputs {
    /**
     * Sorts each column of the input 1D file and writes result to stdout.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param infile Input 1D file to be sorted.
     * @param inc_order Sort into increasing order [default]
     * @param dec_order Sort into decreasing order
     * @param transpose Transpose the file before output.
     * @param column Sort only on column #j (counting starts at 0), and carry the rest of the columns with it.
     * @param imode Typecast all values to integers, return the mode in the input then exit. No sorting results are returned.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V1dTsortOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_1D_TSORT_METADATA);
    const params = v_1d_tsort_params(infile, inc_order, dec_order, transpose, column, imode)
    return v_1d_tsort_execute(params, execution);
}


export {
      V1dTsortOutputs,
      V1dTsortParameters,
      V_1D_TSORT_METADATA,
      v_1d_tsort,
      v_1d_tsort_params,
};
