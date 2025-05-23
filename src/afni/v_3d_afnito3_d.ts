// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_AFNITO3_D_METADATA: Metadata = {
    id: "f3d62c030e84253c6f88c8840150b3d8b1429f7e.boutiques",
    name: "3dAFNIto3D",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dAfnito3DParameters {
    "__STYXTYPE__": "3dAFNIto3D";
    "dataset": InputPathType;
    "prefix"?: string | null | undefined;
    "binary": boolean;
    "text": boolean;
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
        "3dAFNIto3D": v_3d_afnito3_d_cargs,
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
        "3dAFNIto3D": v_3d_afnito3_d_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_afnito3_d(...)`.
 *
 * @interface
 */
interface V3dAfnito3DOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output 3D file, either in binary or text format
     */
    outfile: OutputPathType | null;
}


function v_3d_afnito3_d_params(
    dataset: InputPathType,
    prefix: string | null = null,
    binary: boolean = false,
    text: boolean = false,
): V3dAfnito3DParameters {
    /**
     * Build parameters.
    
     * @param dataset AFNI dataset to be converted
     * @param prefix Write result into file with specified prefix
     * @param binary Write data in binary format
     * @param text Write data in text format
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dAFNIto3D" as const,
        "dataset": dataset,
        "binary": binary,
        "text": text,
    };
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    return params;
}


function v_3d_afnito3_d_cargs(
    params: V3dAfnito3DParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dAFNIto3D");
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["binary"] ?? null)) {
        cargs.push("-bin");
    }
    if ((params["text"] ?? null)) {
        cargs.push("-txt");
    }
    return cargs;
}


function v_3d_afnito3_d_outputs(
    params: V3dAfnito3DParameters,
    execution: Execution,
): V3dAfnito3DOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dAfnito3DOutputs = {
        root: execution.outputFile("."),
        outfile: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".3D"].join('')) : null,
    };
    return ret;
}


function v_3d_afnito3_d_execute(
    params: V3dAfnito3DParameters,
    execution: Execution,
): V3dAfnito3DOutputs {
    /**
     * Reads in an AFNI dataset, and writes it out as a 3D file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dAfnito3DOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_afnito3_d_cargs(params, execution)
    const ret = v_3d_afnito3_d_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_afnito3_d(
    dataset: InputPathType,
    prefix: string | null = null,
    binary: boolean = false,
    text: boolean = false,
    runner: Runner | null = null,
): V3dAfnito3DOutputs {
    /**
     * Reads in an AFNI dataset, and writes it out as a 3D file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset AFNI dataset to be converted
     * @param prefix Write result into file with specified prefix
     * @param binary Write data in binary format
     * @param text Write data in text format
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dAfnito3DOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_AFNITO3_D_METADATA);
    const params = v_3d_afnito3_d_params(dataset, prefix, binary, text)
    return v_3d_afnito3_d_execute(params, execution);
}


export {
      V3dAfnito3DOutputs,
      V3dAfnito3DParameters,
      V_3D_AFNITO3_D_METADATA,
      v_3d_afnito3_d,
      v_3d_afnito3_d_params,
};
