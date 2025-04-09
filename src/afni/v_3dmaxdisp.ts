// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DMAXDISP_METADATA: Metadata = {
    id: "a6aa9cced188a32fdfff9cb9b8e0dd6ed83c244c.boutiques",
    name: "3dmaxdisp",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dmaxdispParameters {
    "__STYXTYPE__": "3dmaxdisp";
    "inset": InputPathType;
    "matrix": InputPathType;
    "verbose": boolean;
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
        "3dmaxdisp": v_3dmaxdisp_cargs,
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
        "3dmaxdisp": v_3dmaxdisp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dmaxdisp(...)`.
 *
 * @interface
 */
interface V3dmaxdispOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Results showing average and maximum displacements.
     */
    displacement_output: OutputPathType;
}


function v_3dmaxdisp_params(
    inset: InputPathType,
    matrix: InputPathType,
    verbose: boolean = false,
): V3dmaxdispParameters {
    /**
     * Build parameters.
    
     * @param inset Input dataset file used to form the mask over which displacements will be computed.
     * @param matrix 3x4 affine transformation matrix file applied to the coordinates of the voxels in the dataset mask.
     * @param verbose Print a few progress reports.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dmaxdisp" as const,
        "inset": inset,
        "matrix": matrix,
        "verbose": verbose,
    };
    return params;
}


function v_3dmaxdisp_cargs(
    params: V3dmaxdispParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dmaxdisp");
    cargs.push(
        "-inset",
        execution.inputFile((params["inset"] ?? null))
    );
    cargs.push(
        "-matrix",
        execution.inputFile((params["matrix"] ?? null))
    );
    if ((params["verbose"] ?? null)) {
        cargs.push("-verb");
    }
    return cargs;
}


function v_3dmaxdisp_outputs(
    params: V3dmaxdispParameters,
    execution: Execution,
): V3dmaxdispOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dmaxdispOutputs = {
        root: execution.outputFile("."),
        displacement_output: execution.outputFile(["stdout"].join('')),
    };
    return ret;
}


function v_3dmaxdisp_execute(
    params: V3dmaxdispParameters,
    execution: Execution,
): V3dmaxdispOutputs {
    /**
     * Reads in a 3D dataset and a DICOM-based affine matrix to output the average and maximum displacement applied to the edge voxels of the 3D dataset's automask.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dmaxdispOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dmaxdisp_cargs(params, execution)
    const ret = v_3dmaxdisp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dmaxdisp(
    inset: InputPathType,
    matrix: InputPathType,
    verbose: boolean = false,
    runner: Runner | null = null,
): V3dmaxdispOutputs {
    /**
     * Reads in a 3D dataset and a DICOM-based affine matrix to output the average and maximum displacement applied to the edge voxels of the 3D dataset's automask.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param inset Input dataset file used to form the mask over which displacements will be computed.
     * @param matrix 3x4 affine transformation matrix file applied to the coordinates of the voxels in the dataset mask.
     * @param verbose Print a few progress reports.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dmaxdispOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DMAXDISP_METADATA);
    const params = v_3dmaxdisp_params(inset, matrix, verbose)
    return v_3dmaxdisp_execute(params, execution);
}


export {
      V3dmaxdispOutputs,
      V3dmaxdispParameters,
      V_3DMAXDISP_METADATA,
      v_3dmaxdisp,
      v_3dmaxdisp_params,
};
