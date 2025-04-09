// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_AFNITO_ANALYZE_METADATA: Metadata = {
    id: "548e038af121070312e4a78291d268ecc7822165.boutiques",
    name: "3dAFNItoANALYZE",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dAfnitoAnalyzeParameters {
    "__STYXTYPE__": "3dAFNItoANALYZE";
    "4d_option": boolean;
    "orient_option"?: string | null | undefined;
    "output_name": string;
    "afni_dataset": InputPathType;
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
        "3dAFNItoANALYZE": v_3d_afnito_analyze_cargs,
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
        "3dAFNItoANALYZE": v_3d_afnito_analyze_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_afnito_analyze(...)`.
 *
 * @interface
 */
interface V3dAfnitoAnalyzeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * ANALYZE header file for each sub-brick
     */
    output_hdr_file: OutputPathType;
    /**
     * ANALYZE image file for each sub-brick
     */
    output_img_file: OutputPathType;
    /**
     * Single ANALYZE header file if using -4D option
     */
    output_4d_hdr_file: OutputPathType;
    /**
     * Single ANALYZE image file if using -4D option
     */
    output_4d_img_file: OutputPathType;
}


function v_3d_afnito_analyze_params(
    output_name: string,
    afni_dataset: InputPathType,
    v_4d_option: boolean = false,
    orient_option: string | null = null,
): V3dAfnitoAnalyzeParameters {
    /**
     * Build parameters.
    
     * @param output_name Output ANALYZE file base name (e.g., aname)
     * @param afni_dataset Input AFNI dataset
     * @param v_4d_option Write all data to one big ANALYZE file pair named aname.hdr/aname.img
     * @param orient_option Flip the dataset to a different orientation when writing to ANALYZE files (e.g., LPI)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dAFNItoANALYZE" as const,
        "4d_option": v_4d_option,
        "output_name": output_name,
        "afni_dataset": afni_dataset,
    };
    if (orient_option !== null) {
        params["orient_option"] = orient_option;
    }
    return params;
}


function v_3d_afnito_analyze_cargs(
    params: V3dAfnitoAnalyzeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dAFNItoANALYZE");
    if ((params["4d_option"] ?? null)) {
        cargs.push("-4D");
    }
    if ((params["orient_option"] ?? null) !== null) {
        cargs.push(
            "-orient",
            (params["orient_option"] ?? null)
        );
    }
    cargs.push((params["output_name"] ?? null));
    cargs.push(execution.inputFile((params["afni_dataset"] ?? null)));
    return cargs;
}


function v_3d_afnito_analyze_outputs(
    params: V3dAfnitoAnalyzeParameters,
    execution: Execution,
): V3dAfnitoAnalyzeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dAfnitoAnalyzeOutputs = {
        root: execution.outputFile("."),
        output_hdr_file: execution.outputFile([(params["output_name"] ?? null), "_[INDEX].hdr"].join('')),
        output_img_file: execution.outputFile([(params["output_name"] ?? null), "_[INDEX].img"].join('')),
        output_4d_hdr_file: execution.outputFile([(params["output_name"] ?? null), ".hdr"].join('')),
        output_4d_img_file: execution.outputFile([(params["output_name"] ?? null), ".img"].join('')),
    };
    return ret;
}


function v_3d_afnito_analyze_execute(
    params: V3dAfnitoAnalyzeParameters,
    execution: Execution,
): V3dAfnitoAnalyzeOutputs {
    /**
     * Writes AFNI dataset to ANALYZE 7.5 format .hdr/.img file pairs.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dAfnitoAnalyzeOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_afnito_analyze_cargs(params, execution)
    const ret = v_3d_afnito_analyze_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_afnito_analyze(
    output_name: string,
    afni_dataset: InputPathType,
    v_4d_option: boolean = false,
    orient_option: string | null = null,
    runner: Runner | null = null,
): V3dAfnitoAnalyzeOutputs {
    /**
     * Writes AFNI dataset to ANALYZE 7.5 format .hdr/.img file pairs.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param output_name Output ANALYZE file base name (e.g., aname)
     * @param afni_dataset Input AFNI dataset
     * @param v_4d_option Write all data to one big ANALYZE file pair named aname.hdr/aname.img
     * @param orient_option Flip the dataset to a different orientation when writing to ANALYZE files (e.g., LPI)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dAfnitoAnalyzeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_AFNITO_ANALYZE_METADATA);
    const params = v_3d_afnito_analyze_params(output_name, afni_dataset, v_4d_option, orient_option)
    return v_3d_afnito_analyze_execute(params, execution);
}


export {
      V3dAfnitoAnalyzeOutputs,
      V3dAfnitoAnalyzeParameters,
      V_3D_AFNITO_ANALYZE_METADATA,
      v_3d_afnito_analyze,
      v_3d_afnito_analyze_params,
};
