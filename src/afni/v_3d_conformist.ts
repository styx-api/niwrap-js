// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_CONFORMIST_METADATA: Metadata = {
    id: "f609f1b815cd20fa63c94e47456124184827cae8.boutiques",
    name: "3dConformist",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dConformistParameters {
    "__STYXTYPE__": "3dConformist";
    "input_files": Array<InputPathType>;
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
        "3dConformist": v_3d_conformist_cargs,
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
        "3dConformist": v_3d_conformist_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_conformist(...)`.
 *
 * @interface
 */
interface V3dConformistOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Zero padded output dataset files
     */
    output_files: OutputPathType;
}


function v_3d_conformist_params(
    input_files: Array<InputPathType>,
): V3dConformistParameters {
    /**
     * Build parameters.
    
     * @param input_files Input datasets to be zero padded to the same size
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dConformist" as const,
        "input_files": input_files,
    };
    return params;
}


function v_3d_conformist_cargs(
    params: V3dConformistParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dConformist");
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function v_3d_conformist_outputs(
    params: V3dConformistParameters,
    execution: Execution,
): V3dConformistOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dConformistOutputs = {
        root: execution.outputFile("."),
        output_files: execution.outputFile(["."].join('')),
    };
    return ret;
}


function v_3d_conformist_execute(
    params: V3dConformistParameters,
    execution: Execution,
): V3dConformistOutputs {
    /**
     * Program to conform a collection of datasets to the same size by zero padding.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dConformistOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_conformist_cargs(params, execution)
    const ret = v_3d_conformist_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_conformist(
    input_files: Array<InputPathType>,
    runner: Runner | null = null,
): V3dConformistOutputs {
    /**
     * Program to conform a collection of datasets to the same size by zero padding.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files Input datasets to be zero padded to the same size
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dConformistOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_CONFORMIST_METADATA);
    const params = v_3d_conformist_params(input_files)
    return v_3d_conformist_execute(params, execution);
}


export {
      V3dConformistOutputs,
      V3dConformistParameters,
      V_3D_CONFORMIST_METADATA,
      v_3d_conformist,
      v_3d_conformist_params,
};
