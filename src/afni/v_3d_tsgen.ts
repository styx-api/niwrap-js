// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TSGEN_METADATA: Metadata = {
    id: "cdf7418bc42352fc7dbfd986bc66d59a6325538b.boutiques",
    name: "3dTSgen",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dTsgenParameters {
    "__STYXTYPE__": "3dTSgen";
    "input_file": InputPathType;
    "in_tr_flag": boolean;
    "signal_label": string;
    "noise_label": string;
    "signal_constr"?: string | null | undefined;
    "noise_constr"?: string | null | undefined;
    "sigma_value": number;
    "voxel_number"?: number | null | undefined;
    "output_file": string;
    "signal_coef"?: string | null | undefined;
    "noise_coef"?: string | null | undefined;
    "bucket_config"?: string | null | undefined;
    "brick_config"?: string | null | undefined;
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
        "3dTSgen": v_3d_tsgen_cargs,
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
 * Output object returned when calling `v_3d_tsgen(...)`.
 *
 * @interface
 */
interface V3dTsgenOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_tsgen_params(
    input_file: InputPathType,
    signal_label: string,
    noise_label: string,
    sigma_value: number,
    output_file: string,
    in_tr_flag: boolean = false,
    signal_constr: string | null = null,
    noise_constr: string | null = null,
    voxel_number: number | null = null,
    signal_coef: string | null = null,
    noise_coef: string | null = null,
    bucket_config: string | null = null,
    brick_config: string | null = null,
): V3dTsgenParameters {
    /**
     * Build parameters.
    
     * @param input_file Filename of prototype 3d + time data file
     * @param signal_label Name of the (non-linear) signal model
     * @param noise_label Name of the (linear) noise model
     * @param sigma_value Standard deviation of additive Gaussian noise
     * @param output_file Filename of output 3d + time data file
     * @param in_tr_flag Set the TR of the created timeseries to be the TR of the prototype dataset. The default is TR = 1.
     * @param signal_constr Constraints for kth signal parameter. Format: k c d where c <= gs[k] <= d
     * @param noise_constr Constraints for kth noise parameter. Format: k c d where c+b[k] <= gn[k] <= d+b[k]
     * @param voxel_number Screen output for voxel number
     * @param signal_coef Write kth signal parameter gs[k]. Output 'fim' is written to prefix filename
     * @param noise_coef Write kth noise parameter gn[k]. Output 'fim' is written to prefix filename
     * @param bucket_config Create one AFNI 'bucket' dataset containing n sub-bricks. n=0 creates the default output. Output 'bucket' is written to prefixname
     * @param brick_config Specify content for sub-brick in the form 'm t k label' where m is the sub-brick number, t is 'scoef' or 'ncoef', k is parameter index, and label is a descriptive label.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dTSgen" as const,
        "input_file": input_file,
        "in_tr_flag": in_tr_flag,
        "signal_label": signal_label,
        "noise_label": noise_label,
        "sigma_value": sigma_value,
        "output_file": output_file,
    };
    if (signal_constr !== null) {
        params["signal_constr"] = signal_constr;
    }
    if (noise_constr !== null) {
        params["noise_constr"] = noise_constr;
    }
    if (voxel_number !== null) {
        params["voxel_number"] = voxel_number;
    }
    if (signal_coef !== null) {
        params["signal_coef"] = signal_coef;
    }
    if (noise_coef !== null) {
        params["noise_coef"] = noise_coef;
    }
    if (bucket_config !== null) {
        params["bucket_config"] = bucket_config;
    }
    if (brick_config !== null) {
        params["brick_config"] = brick_config;
    }
    return params;
}


function v_3d_tsgen_cargs(
    params: V3dTsgenParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dTSgen");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    if ((params["in_tr_flag"] ?? null)) {
        cargs.push("-inTR");
    }
    cargs.push(
        "-signal",
        (params["signal_label"] ?? null)
    );
    cargs.push(
        "-noise",
        (params["noise_label"] ?? null)
    );
    if ((params["signal_constr"] ?? null) !== null) {
        cargs.push(
            "-sconstr",
            (params["signal_constr"] ?? null)
        );
    }
    if ((params["noise_constr"] ?? null) !== null) {
        cargs.push(
            "-nconstr",
            (params["noise_constr"] ?? null)
        );
    }
    cargs.push(
        "-sigma",
        String((params["sigma_value"] ?? null))
    );
    if ((params["voxel_number"] ?? null) !== null) {
        cargs.push(
            "-voxel",
            String((params["voxel_number"] ?? null))
        );
    }
    cargs.push(
        "-output",
        (params["output_file"] ?? null)
    );
    if ((params["signal_coef"] ?? null) !== null) {
        cargs.push(
            "-scoef",
            (params["signal_coef"] ?? null)
        );
    }
    if ((params["noise_coef"] ?? null) !== null) {
        cargs.push(
            "-ncoef",
            (params["noise_coef"] ?? null)
        );
    }
    if ((params["bucket_config"] ?? null) !== null) {
        cargs.push(
            "-bucket",
            (params["bucket_config"] ?? null)
        );
    }
    if ((params["brick_config"] ?? null) !== null) {
        cargs.push(
            "-brick",
            (params["brick_config"] ?? null)
        );
    }
    return cargs;
}


function v_3d_tsgen_outputs(
    params: V3dTsgenParameters,
    execution: Execution,
): V3dTsgenOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dTsgenOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_tsgen_execute(
    params: V3dTsgenParameters,
    execution: Execution,
): V3dTsgenOutputs {
    /**
     * This program generates an AFNI 3d+time data set based on user-specified signal and noise models for each voxel.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dTsgenOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_tsgen_cargs(params, execution)
    const ret = v_3d_tsgen_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_tsgen(
    input_file: InputPathType,
    signal_label: string,
    noise_label: string,
    sigma_value: number,
    output_file: string,
    in_tr_flag: boolean = false,
    signal_constr: string | null = null,
    noise_constr: string | null = null,
    voxel_number: number | null = null,
    signal_coef: string | null = null,
    noise_coef: string | null = null,
    bucket_config: string | null = null,
    brick_config: string | null = null,
    runner: Runner | null = null,
): V3dTsgenOutputs {
    /**
     * This program generates an AFNI 3d+time data set based on user-specified signal and noise models for each voxel.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Filename of prototype 3d + time data file
     * @param signal_label Name of the (non-linear) signal model
     * @param noise_label Name of the (linear) noise model
     * @param sigma_value Standard deviation of additive Gaussian noise
     * @param output_file Filename of output 3d + time data file
     * @param in_tr_flag Set the TR of the created timeseries to be the TR of the prototype dataset. The default is TR = 1.
     * @param signal_constr Constraints for kth signal parameter. Format: k c d where c <= gs[k] <= d
     * @param noise_constr Constraints for kth noise parameter. Format: k c d where c+b[k] <= gn[k] <= d+b[k]
     * @param voxel_number Screen output for voxel number
     * @param signal_coef Write kth signal parameter gs[k]. Output 'fim' is written to prefix filename
     * @param noise_coef Write kth noise parameter gn[k]. Output 'fim' is written to prefix filename
     * @param bucket_config Create one AFNI 'bucket' dataset containing n sub-bricks. n=0 creates the default output. Output 'bucket' is written to prefixname
     * @param brick_config Specify content for sub-brick in the form 'm t k label' where m is the sub-brick number, t is 'scoef' or 'ncoef', k is parameter index, and label is a descriptive label.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dTsgenOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TSGEN_METADATA);
    const params = v_3d_tsgen_params(input_file, signal_label, noise_label, sigma_value, output_file, in_tr_flag, signal_constr, noise_constr, voxel_number, signal_coef, noise_coef, bucket_config, brick_config)
    return v_3d_tsgen_execute(params, execution);
}


export {
      V3dTsgenOutputs,
      V3dTsgenParameters,
      V_3D_TSGEN_METADATA,
      v_3d_tsgen,
      v_3d_tsgen_params,
};
