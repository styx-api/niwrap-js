// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_LOCAL_ACF_METADATA: Metadata = {
    id: "f02de9f266ae864cf54889181b4c744098070407.boutiques",
    name: "3dLocalACF",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dLocalAcfParameters {
    "__STYXTYPE__": "3dLocalACF";
    "prefix": string;
    "input_file": InputPathType;
    "neighborhood"?: string | null | undefined;
    "mask_file"?: InputPathType | null | undefined;
    "auto_mask": boolean;
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
        "3dLocalACF": v_3d_local_acf_cargs,
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
        "3dLocalACF": v_3d_local_acf_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_local_acf(...)`.
 *
 * @interface
 */
interface V3dLocalAcfOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset with ACF estimates
     */
    output_file: OutputPathType;
}


function v_3d_local_acf_params(
    prefix: string,
    input_file: InputPathType,
    neighborhood: string | null = null,
    mask_file: InputPathType | null = null,
    auto_mask: boolean = false,
): V3dLocalAcfParameters {
    /**
     * Build parameters.
    
     * @param prefix Prefix for output dataset
     * @param input_file Input time series dataset
     * @param neighborhood Neighborhood specification (e.g., SPHERE(25))
     * @param mask_file Dataset to mask the analysis
     * @param auto_mask Automatically generate brain mask from input dataset
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dLocalACF" as const,
        "prefix": prefix,
        "input_file": input_file,
        "auto_mask": auto_mask,
    };
    if (neighborhood !== null) {
        params["neighborhood"] = neighborhood;
    }
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    return params;
}


function v_3d_local_acf_cargs(
    params: V3dLocalAcfParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dLocalACF");
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    if ((params["neighborhood"] ?? null) !== null) {
        cargs.push(
            "-nbhd",
            (params["neighborhood"] ?? null)
        );
    }
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask_file"] ?? null))
        );
    }
    if ((params["auto_mask"] ?? null)) {
        cargs.push("-automask");
    }
    return cargs;
}


function v_3d_local_acf_outputs(
    params: V3dLocalAcfParameters,
    execution: Execution,
): V3dLocalAcfOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dLocalAcfOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["prefix"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function v_3d_local_acf_execute(
    params: V3dLocalAcfParameters,
    execution: Execution,
): V3dLocalAcfOutputs {
    /**
     * Estimate the spatial AutoCorrelation Function (ACF) locally in a neighborhood around each voxel.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dLocalAcfOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_local_acf_cargs(params, execution)
    const ret = v_3d_local_acf_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_local_acf(
    prefix: string,
    input_file: InputPathType,
    neighborhood: string | null = null,
    mask_file: InputPathType | null = null,
    auto_mask: boolean = false,
    runner: Runner | null = null,
): V3dLocalAcfOutputs {
    /**
     * Estimate the spatial AutoCorrelation Function (ACF) locally in a neighborhood around each voxel.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Prefix for output dataset
     * @param input_file Input time series dataset
     * @param neighborhood Neighborhood specification (e.g., SPHERE(25))
     * @param mask_file Dataset to mask the analysis
     * @param auto_mask Automatically generate brain mask from input dataset
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dLocalAcfOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_LOCAL_ACF_METADATA);
    const params = v_3d_local_acf_params(prefix, input_file, neighborhood, mask_file, auto_mask)
    return v_3d_local_acf_execute(params, execution);
}


export {
      V3dLocalAcfOutputs,
      V3dLocalAcfParameters,
      V_3D_LOCAL_ACF_METADATA,
      v_3d_local_acf,
      v_3d_local_acf_params,
};
