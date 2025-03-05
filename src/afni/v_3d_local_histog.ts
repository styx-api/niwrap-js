// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_LOCAL_HISTOG_METADATA: Metadata = {
    id: "de01f1dbbd5bfe5031e2c7c493ec364d82e32012.boutiques",
    name: "3dLocalHistog",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dLocalHistogParameters {
    "__STYXTYPE__": "3dLocalHistog";
    "nbhd_option"?: string | null | undefined;
    "prefix": string;
    "hsave"?: string | null | undefined;
    "lab_file"?: InputPathType | null | undefined;
    "exclude"?: Array<string> | null | undefined;
    "mincount"?: number | null | undefined;
    "input_datasets": Array<InputPathType>;
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
        "3dLocalHistog": v_3d_local_histog_cargs,
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
        "3dLocalHistog": v_3d_local_histog_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_local_histog(...)`.
 *
 * @interface
 */
interface V3dLocalHistogOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output dataset with the specified prefix
     */
    output_dataset_head: OutputPathType;
    /**
     * The output dataset with the specified prefix
     */
    output_dataset_brik: OutputPathType;
    /**
     * The overall histogram saved into the specified file
     */
    histogram_file: OutputPathType | null;
}


function v_3d_local_histog_params(
    prefix: string,
    input_datasets: Array<InputPathType>,
    nbhd_option: string | null = null,
    hsave: string | null = null,
    lab_file: InputPathType | null = null,
    exclude: Array<string> | null = null,
    mincount: number | null = null,
): V3dLocalHistogParameters {
    /**
     * Build parameters.
    
     * @param prefix Use string 'ppp' as the prefix for the output dataset.
     * @param input_datasets Input dataset(s) for the 3dLocalHistog tool
     * @param nbhd_option Defines the region around each voxel to be used for the statistics calculation. Available formats: 'SPHERE(r)', 'RECT(a,b,c)', 'RHDD(a)', 'TOHD(a)'.
     * @param hsave Save the overall histogram into file 'sss'. This file will have 2 columns: value and count.
     * @param lab_file Use file 'LL' as a label file.
     * @param exclude Exclude values from 'a' to 'b' from the counting. This option can be used more than once.
     * @param mincount Exclude values which appear in the overall histogram fewer than 'mm' times.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dLocalHistog" as const,
        "prefix": prefix,
        "input_datasets": input_datasets,
    };
    if (nbhd_option !== null) {
        params["nbhd_option"] = nbhd_option;
    }
    if (hsave !== null) {
        params["hsave"] = hsave;
    }
    if (lab_file !== null) {
        params["lab_file"] = lab_file;
    }
    if (exclude !== null) {
        params["exclude"] = exclude;
    }
    if (mincount !== null) {
        params["mincount"] = mincount;
    }
    return params;
}


function v_3d_local_histog_cargs(
    params: V3dLocalHistogParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dLocalHistog");
    if ((params["nbhd_option"] ?? null) !== null) {
        cargs.push(
            "-nbhd",
            (params["nbhd_option"] ?? null)
        );
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["hsave"] ?? null) !== null) {
        cargs.push(
            "-hsave",
            (params["hsave"] ?? null)
        );
    }
    if ((params["lab_file"] ?? null) !== null) {
        cargs.push(
            "-lab_file",
            execution.inputFile((params["lab_file"] ?? null))
        );
    }
    if ((params["exclude"] ?? null) !== null) {
        cargs.push(
            "-exclude",
            ...(params["exclude"] ?? null)
        );
    }
    if ((params["mincount"] ?? null) !== null) {
        cargs.push(
            "-mincount",
            String((params["mincount"] ?? null))
        );
    }
    cargs.push(...(params["input_datasets"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function v_3d_local_histog_outputs(
    params: V3dLocalHistogParameters,
    execution: Execution,
): V3dLocalHistogOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dLocalHistogOutputs = {
        root: execution.outputFile("."),
        output_dataset_head: execution.outputFile([(params["prefix"] ?? null), "+orig.HEAD"].join('')),
        output_dataset_brik: execution.outputFile([(params["prefix"] ?? null), "+orig.BRIK"].join('')),
        histogram_file: ((params["hsave"] ?? null) !== null) ? execution.outputFile([(params["hsave"] ?? null)].join('')) : null,
    };
    return ret;
}


function v_3d_local_histog_execute(
    params: V3dLocalHistogParameters,
    execution: Execution,
): V3dLocalHistogOutputs {
    /**
     * This program computes a local histogram at each voxel in the input datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dLocalHistogOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_local_histog_cargs(params, execution)
    const ret = v_3d_local_histog_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_local_histog(
    prefix: string,
    input_datasets: Array<InputPathType>,
    nbhd_option: string | null = null,
    hsave: string | null = null,
    lab_file: InputPathType | null = null,
    exclude: Array<string> | null = null,
    mincount: number | null = null,
    runner: Runner | null = null,
): V3dLocalHistogOutputs {
    /**
     * This program computes a local histogram at each voxel in the input datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Use string 'ppp' as the prefix for the output dataset.
     * @param input_datasets Input dataset(s) for the 3dLocalHistog tool
     * @param nbhd_option Defines the region around each voxel to be used for the statistics calculation. Available formats: 'SPHERE(r)', 'RECT(a,b,c)', 'RHDD(a)', 'TOHD(a)'.
     * @param hsave Save the overall histogram into file 'sss'. This file will have 2 columns: value and count.
     * @param lab_file Use file 'LL' as a label file.
     * @param exclude Exclude values from 'a' to 'b' from the counting. This option can be used more than once.
     * @param mincount Exclude values which appear in the overall histogram fewer than 'mm' times.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dLocalHistogOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_LOCAL_HISTOG_METADATA);
    const params = v_3d_local_histog_params(prefix, input_datasets, nbhd_option, hsave, lab_file, exclude, mincount)
    return v_3d_local_histog_execute(params, execution);
}


export {
      V3dLocalHistogOutputs,
      V3dLocalHistogParameters,
      V_3D_LOCAL_HISTOG_METADATA,
      v_3d_local_histog,
      v_3d_local_histog_params,
};
