// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CAT_MATVEC_METADATA: Metadata = {
    id: "38568441c32dcbccb9c494130a605bc3b4f2c16b.boutiques",
    name: "cat_matvec",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface CatMatvecParameters {
    "__STYXTYPE__": "cat_matvec";
    "matrix_format": boolean;
    "oneline_format": boolean;
    "four_by_four_format": boolean;
    "matvec_spec": Array<string>;
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
        "cat_matvec": cat_matvec_cargs,
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
 * Output object returned when calling `cat_matvec(...)`.
 *
 * @interface
 */
interface CatMatvecOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function cat_matvec_params(
    matvec_spec: Array<string>,
    matrix_format: boolean = false,
    oneline_format: boolean = false,
    four_by_four_format: boolean = false,
): CatMatvecParameters {
    /**
     * Build parameters.
    
     * @param matvec_spec Specifies the matrix transformation. Can take forms described in the documentation.
     * @param matrix_format Indicates that the resulting matrix will be written in the 'MATRIX(...)' format (FORM 3).
     * @param oneline_format Option indicates that the resulting matrix will simply be written as 12 numbers on one line.
     * @param four_by_four_format Output matrix in augmented form (last row is 0 0 0 1). This option does not work with -MATRIX or -ONELINE.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cat_matvec" as const,
        "matrix_format": matrix_format,
        "oneline_format": oneline_format,
        "four_by_four_format": four_by_four_format,
        "matvec_spec": matvec_spec,
    };
    return params;
}


function cat_matvec_cargs(
    params: CatMatvecParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("cat_matvec");
    if ((params["matrix_format"] ?? null)) {
        cargs.push("-MATRIX");
    }
    if ((params["oneline_format"] ?? null)) {
        cargs.push("-ONELINE");
    }
    if ((params["four_by_four_format"] ?? null)) {
        cargs.push("-4x4");
    }
    cargs.push(...(params["matvec_spec"] ?? null));
    return cargs;
}


function cat_matvec_outputs(
    params: CatMatvecParameters,
    execution: Execution,
): CatMatvecOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CatMatvecOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function cat_matvec_execute(
    params: CatMatvecParameters,
    execution: Execution,
): CatMatvecOutputs {
    /**
     * Catenates 3D rotation+shift matrix+vector transformations.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CatMatvecOutputs`).
     */
    params = execution.params(params)
    const cargs = cat_matvec_cargs(params, execution)
    const ret = cat_matvec_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cat_matvec(
    matvec_spec: Array<string>,
    matrix_format: boolean = false,
    oneline_format: boolean = false,
    four_by_four_format: boolean = false,
    runner: Runner | null = null,
): CatMatvecOutputs {
    /**
     * Catenates 3D rotation+shift matrix+vector transformations.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param matvec_spec Specifies the matrix transformation. Can take forms described in the documentation.
     * @param matrix_format Indicates that the resulting matrix will be written in the 'MATRIX(...)' format (FORM 3).
     * @param oneline_format Option indicates that the resulting matrix will simply be written as 12 numbers on one line.
     * @param four_by_four_format Output matrix in augmented form (last row is 0 0 0 1). This option does not work with -MATRIX or -ONELINE.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CatMatvecOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CAT_MATVEC_METADATA);
    const params = cat_matvec_params(matvec_spec, matrix_format, oneline_format, four_by_four_format)
    return cat_matvec_execute(params, execution);
}


export {
      CAT_MATVEC_METADATA,
      CatMatvecOutputs,
      CatMatvecParameters,
      cat_matvec,
      cat_matvec_params,
};
